import Link from 'next/link';
import { Home, Heart, MessageSquare, User, Database, Zap, BookOpen, Play, Apple, Globe } from 'lucide-react';
import { useState } from 'react';

export default function LeftSidebar({ isOpen }) {
  const navItems = [
    { icon: <Home size={20} />, label: 'Home', id: 'home' },
    { icon: <Heart size={20} />, label: 'Match', id: 'match' },
    { icon: <MessageSquare size={20} />, label: 'Messages', id: 'messages' },
    { icon: <User size={20} />, label: 'Profile', id: 'profile' },
    { icon: <Database size={20} />, label: 'Personality Database', id: 'database' },
    { icon: <Zap size={20} />, label: 'Personality Tests', id: 'tests' },
    { icon: <BookOpen size={20} />, label: 'Resources', id: 'resources' },
  ];

  const bottomItems = [
    { icon: <Play size={20} />, label: 'Play Store', id: 'playstore' },
    { icon: <Apple size={20} />, label: 'App Store', id: 'appstore' },
    { icon: <Globe size={20} />, label: 'Language', id: 'language' },
  ];

  return (
    <>
      {/* Sidebar - responsive width */}
      <div className="h-full bg-black border-r border-gray-800 flex flex-col overflow-hidden relative">
        {/* Minimized view - always visible as base */}
        <div className="flex flex-col items-center justify-between py-4 h-full">
          <nav className="space-y-4 flex flex-col items-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`https://boo.world/${item.id === 'home' ? '' : item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
                title={item.label}
              >
                {item.icon}
              </a>
            ))}
          </nav>

          {/* Bottom icons */}
          <div className="space-y-4 flex flex-col items-center">
            {bottomItems.map((item) => (
              <a
                key={item.id}
                href={item.id === 'playstore' ? 'https://play.google.com/store/apps/details?id=enterprises.dating.boo&utm_source=website&utm_medium=owned&utm_campaign=websiteandroid' : 
                     item.id === 'appstore' ? 'https://apps.apple.com/app/boo/id1234567890' :
                     'https://boo.world'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
                title={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Expanded view - overlays on top when open */}
        {isOpen && (
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-black border-r border-gray-800 overflow-hidden flex flex-col z-50">
            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* Navigation */}
              <nav className="space-y-1 mb-6">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`https://boo.world/${item.id === 'home' ? '' : item.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors text-sm"
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>

              {/* Bottom section */}
              <div className="space-y-2">
                {bottomItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.id === 'playstore' ? 'https://play.google.com/store/apps/details?id=enterprises.dating.boo&utm_source=website&utm_medium=owned&utm_campaign=websiteandroid' : 
                         item.id === 'appstore' ? 'https://apps.apple.com/app/boo/id1234567890' :
                         'https://boo.world'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors text-sm"
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Fixed Footer at Bottom */}
            <div className="border-t border-gray-800 bg-black p-4 flex-shrink-0">
              <div className="text-xs text-gray-500 space-y-1">
                <div>We stand for love ❤️</div>
                <div className="flex space-x-1 text-gray-600 text-xs">
                  <a href="#" className="hover:text-gray-400">Terms</a>
                  <span>•</span>
                  <a href="#" className="hover:text-gray-400">Privacy</a>
                  <span>•</span>
                  <a href="#" className="hover:text-gray-400">FAQ</a>
                </div>
                <div className="text-xs">© 2025 Boo Enterprises, Inc.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
