import { PrismaClient } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { hashPassword, comparePassword } from '../utils/auth';

const prisma = new PrismaClient();

export const userRouter = {
  create: async (input: z.infer<typeof CreateUserInput>) => {
    const hashedPassword = await hashPassword(input.password);
    const user = await prisma.user.create({
      data: {
        username: input.username,
        password: hashedPassword,
      },
    });
    return user;
  },
  login: async (input: z.infer<typeof LoginInput>) => {
    const user = await prisma.user.findUnique({
      where: { username: input.username },
    });
    if (!user) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'User not found',
      });
    }
    const passwordValid = await comparePassword(input.password, user.password);
    if (!passwordValid) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'Invalid password',
      });
    }
    return user;
  },
};

const CreateUserInput = z.object({
  username: z.string(),
  password: z.string(),
});

const LoginInput = z.object({
  username: z.string(),
  password: z.string(),
});