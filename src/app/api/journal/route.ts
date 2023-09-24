import { getUserByClerkId } from '@/utils/auth';
import { prisma } from '@/utils/db';
import { NextResponse } from 'next/server';
import { JournalEntry, User } from '.prisma/client';

export const POST = async () => {
  const user: User = await getUserByClerkId();

  const entry: JournalEntry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'Write about your day!',
    },
  });

  return NextResponse.json({ data: entry });
};
