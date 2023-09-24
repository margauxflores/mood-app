import React from 'react';

type Props = {
  entry: JournalEntryWithAnalysis;
};

export const EntryCard: React.FC<Props> = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">Summary</div>
      <div className="px-4 py-4 sm:px-6">Mood</div>
    </div>
  );
};
