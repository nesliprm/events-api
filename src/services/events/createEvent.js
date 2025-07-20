import { PrismaClient } from "@prisma/client";

const createEvent = async (
  title,
  description,
  location,
  image,
  startTime,
  endTime,
  createdBy,
  categoryIds
) => {
  const prisma = new PrismaClient();
  return prisma.event.create({
    data: {
      title,
      description,
      location,
      image,
      startTime,
      endTime,
      createdBy,
      category: { connect: categoryIds.map((id) => ({ id })) },
    },
  });
};

export default createEvent;
