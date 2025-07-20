import { PrismaClient } from "@prisma/client";

const deleteCategoryById = async (id) => {
  const prisma = new PrismaClient();

  return prisma.category.delete({ where: { id } });
};

export default deleteCategoryById;
