import { PrismaClient } from "@prisma/client";

const createUser = async (username, name, password, image) => {
  const prisma = new PrismaClient();
  return prisma.user.create({ data: { username, name, password, image } });
};

export default createUser;
