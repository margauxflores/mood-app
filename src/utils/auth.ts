import { auth } from '@clerk/nextjs';
import { prisma } from '@/utils/db';
import { User } from '.prisma/client';

export const getUserByClerkId = async () => {
  const { userId } = auth();

  const user: User = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string,
    },
  });

  return user;
};
