import { createRouter } from '@trpc/server';
import { userController } from './controllers/userController';
import { tweetController } from './controllers/tweetController';

export const router = createRouter()
  .merge('user.', userController)
  .merge('tweet.', tweetController);