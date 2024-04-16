import React from 'react';

export default function Cards({ img, foodName, desc }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg hover:bg-sky-700">
      <img className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover" src={img} alt={foodName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{foodName}</div>
        <p className="text-gray-700 text-base">{desc}</p>
      </div>
    </div>
  );
}
