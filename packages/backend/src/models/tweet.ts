import { PrismaClient, Tweet as PrismaTweet } from '@prisma/client';

const prisma = new PrismaClient();

export interface Tweet {
  id: number;
  content: string;
  userId: number;
}

export const getAllTweets = async (): Promise<Tweet[]> => {
  return prisma.tweet.findMany();
};

export const getTweetById = async (id: number): Promise<Tweet | null> => {
  return prisma.tweet.findUnique({
    where: { id },
  });
};

export const createTweet = async (content: string, userId: number): Promise<Tweet> => {
  return prisma.tweet.create({
    data: {
      content,
      userId,
    },
  });
};

export const updateTweet = async (id: number, content: string): Promise<Tweet> => {
  return prisma.tweet.update({
    where: { id },
    data: { content },
  });
};

export const deleteTweet = async (id: number): Promise<PrismaTweet> => {
  return prisma.tweet.delete({
    where: { id },
  });
};