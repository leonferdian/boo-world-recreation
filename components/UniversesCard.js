import { universes } from '../lib/mockData';

export default function UniversesCard() {
  return (
    <div className="hidden md:flex flex-col rounded-3xl bg-black border border-gray-800 h-full overflow-hidden shadow-lg">
      {/* Header */}
      <p className="text-lg font-semibold px-5 pt-5 text-white">Universes</p>

      {/* Scrollable content with gradient mask */}
      <div className="overflow-y-auto flex-1 px-5 pb-5 pt-4 flex flex-col gap-3" style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 20px, black calc(100% - 20px), transparent 100%)'
      }}>
        {universes.map((universe, index) => (
          <a 
            key={index}
            href={`https://boo.world/u/${universe.name.toLowerCase().replace(/\s+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group hover:opacity-80 transition-opacity"
          >
            {/* Hashtag with icon */}
            <div className="flex items-center gap-2">
              <span className="text-sm">{universe.icon}</span>
              <span className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                #{universe.name}
              </span>
            </div>
            
            {/* Soul count */}
            <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors whitespace-nowrap">
              {universe.posts}M souls
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
