import React from 'react';

export function Header({ handleOverviewClick }) {
  return (
    <header className="flex items-center justify-between p-5 bg-green-500 font-bold text-3xl">
      <h1>Cookie Stand Admin</h1>
      <button
        onClick={handleOverviewClick}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Overview
      </button>
    </header>
  );
}
