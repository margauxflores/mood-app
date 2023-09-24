'use client';

import React from 'react';
import { createNewEntry } from '@/utils/api';

export const NewEntryCard = () => {
  const handleOnClick = async () => {
    await createNewEntry();
  };

  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6" onClick={handleOnClick}>
        <span className="text-3xl">New Entry</span>
      </div>
    </div>
  );
};
