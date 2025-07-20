import { PrismaClient } from "@prisma/client";

const getEvents = async (title, location) => {
  const prisma = new PrismaClient();
  return prisma.event.findMany({ where: { title, location } });
};

export default getEvents;
