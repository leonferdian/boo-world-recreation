import { useState, useEffect } from 'react';
import { universes } from '../lib/mockData';

export default function Sidebar({ isOpen, onToggle }) {
  const [activeUniverse, setActiveUniverse] = useState('questions');

  return (
    <aside 
      className={`fixed left-0 top-16 bottom-0 w-64 bg-gray-900 border-r border-gray-800 overflow-y-auto transition-all duration-300 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-4">Universes</h2>
        <div className="space-y-2">
          {universes.map((universe) => (
            <button
              key={universe.name}
              className={`flex items-center w-full px-3 py-2 rounded-lg text-left ${
                activeUniverse === universe.name
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setActiveUniverse(universe.name)}
            >
              <span className="mr-2">{universe.icon}</span>
              <span className="flex-1 capitalize">{universe.name}</span>
              <span className="text-xs text-gray-400">{universe.members}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
