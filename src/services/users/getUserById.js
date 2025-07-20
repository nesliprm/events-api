import { PrismaClient } from "@prisma/client";

const getUserById = async (id) => {
  const prisma = new PrismaClient();
  return prisma.user.findUnique({ where: { id } });
};

export default getUserById;
