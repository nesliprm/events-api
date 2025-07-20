import { PrismaClient } from "@prisma/client";

const updateUserById = async (id, updatedUser) => {
  const prisma = new PrismaClient();

  return prisma.user.update({ where: { id }, data: { ...updatedUser } });
};

export default updateUserById;
