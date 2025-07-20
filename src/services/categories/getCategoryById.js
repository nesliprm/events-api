import { PrismaClient } from "@prisma/client";

const getCategoryById = async (id) => {
  const prisma = new PrismaClient();

  return prisma.category.findUnique({ where: { id } });
};

export default getCategoryById;
