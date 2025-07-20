import { PrismaClient } from "@prisma/client";

const updateEventById = async (id, updatedEvent) => {
  const prisma = new PrismaClient();

  return prisma.event.update({ where: { id }, data: { ...updatedEvent } });
};

export default updateEventById;
