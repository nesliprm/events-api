import { PrismaClient } from "@prisma/client";
import categoryData from "../src/data/categories.json" assert { type: "json" };
import eventData from "../src/data/events.json" assert { type: "json" };
import userData from "../src/data/users.json" assert { type: "json" };

const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });

async function main() {
  const { users } = userData;
  const { categories } = categoryData;
  const { events } = eventData;

  for (const user of users) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: {
        id: user.id,
        username: user.username,
        password: user.password,
        name: user.name,
        image: user.image,
      },
    });
  }

  for (const category of categories) {
    await prisma.category.upsert({
      where: { id: category.id },
      update: {},
      create: { id: category.id, name: category.name },
    });
  }

  for (const event of events) {
    await prisma.event.upsert({
      where: { id: event.id },
      update: {},
      create: {
        id: event.id,
        createdBy: event.createdBy,
        title: event.title,
        description: event.description,
        image: event.image,
        location: event.location,
        startTime: new Date(event.startTime),
        endTime: new Date(event.endTime),
        categories: {
          connect: event.categoryIds.map((categoryId) => ({ id: categoryId })),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
