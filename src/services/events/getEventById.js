import { PrismaClient } from "@prisma/client";

const getEventById = async (id) => {
  const prisma = new PrismaClient();
  return prisma.event.findUnique({
    where: { id },
    include: {
      category: true,
      createdBy: true,
    },
  });
};

export default getEventById;
