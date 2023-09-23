import React from 'react';
import { JournalEntry } from '.prisma/client';

type Props = {
  entry?: JournalEntry;
};

export const EntryCard: React.FC<Props> = ({ entry }) => {
  return <div>{entry?.id}</div>;
};
