import { PrismaClient } from "@prisma/client";

const deleteEventById = async (id) => {
  const prisma = new PrismaClient();

  return prisma.event.delete({ where: { id } });
};

export default deleteEventById;
