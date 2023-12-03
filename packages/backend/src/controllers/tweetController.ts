import { PrismaClient } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

const prisma = new PrismaClient();

export const tweetController = {
  create: async (input: z.infer<typeof CreateTweetSchema>) => {
    const { content, userId } = input;
    const tweet = await prisma.tweet.create({
      data: {
        content,
        userId,
      },
    });
    return tweet;
  },
  get: async (id: string) => {
    const tweet = await prisma.tweet.findUnique({
      where: { id },
    });
    if (!tweet) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `Tweet with id ${id} not found`,
      });
    }
    return tweet;
  },
  list: async () => {
    const tweets = await prisma.tweet.findMany();
    return tweets;
  },
  update: async (input: z.infer<typeof UpdateTweetSchema>) => {
    const { id, content } = input;
    const tweet = await prisma.tweet.update({
      where: { id },
      data: { content },
    });
    return tweet;
  },
  delete: async (id: string) => {
    const tweet = await prisma.tweet.delete({
      where: { id },
    });
    return tweet;
  },
};

const CreateTweetSchema = z.object({
  content: z.string(),
  userId: z.string(),
});

const UpdateTweetSchema = z.object({
  id: z.string(),
  content: z.string(),
});