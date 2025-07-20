import { PrismaClient } from "@prisma/client";

const deleteUserById = async (id) => {
  const prisma = new PrismaClient();

  return prisma.user.delete({ where: { id } });
};

export default deleteUserById;
