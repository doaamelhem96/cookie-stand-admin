import React from 'react';

export default function Footer({ totalLocations }) {
  return (
    <footer className="p-4 mt-8 bg-green-500 text-gray-50">
      {totalLocations} Locations World Wide
    </footer>
  );
}
