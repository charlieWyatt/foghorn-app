import { TRPCError } from '@trpc/server';

export function errorHandler(error: TRPCError) {
  console.error(error.message);
  return {
    status: error.httpStatus ?? 500,
    body: {
      error: error.message,
    },
  };
}