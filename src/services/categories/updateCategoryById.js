import { PrismaClient } from "@prisma/client";

const updateCategoryById = async (id, updatedCategory) => {
  const prisma = new PrismaClient();

  return prisma.category.update({
    where: { id },
    data: { ...updatedCategory },
  });
};

export default updateCategoryById;
