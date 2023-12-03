import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: '7d',
  });
};

export const getUserId = (request: any) => {
  const header = request.get('Authorization');
  if (header) {
    const token = header.replace('Bearer ', '');
    const { userId } = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };
    return userId;
  }

  throw new Error('No authentication header found.');
};

export const checkAuth = async (request: any) => {
  const userId = getUserId(request);
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error('User not found.');
  }

  return user;
};