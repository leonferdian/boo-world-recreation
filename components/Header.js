import { Search, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import SignInModal from './SignInModal';

export default function Header({ onMenuToggle }) {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  return (
    <>
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
      <header className="bg-black border-b border-gray-800 fixed top-0 left-0 right-0 z-50 h-16">
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(34, 211, 238, 0.5); }
          50% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.8); }
        }
        .glow-button {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      <div className="h-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Left: Menu and Logo */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onMenuToggle}
              className="p-2 text-white hover:bg-gray-900 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-white">BOO</span>
            </Link>
          </div>

          {/* Center: Search */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-full bg-gray-900 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Right: Sign In */}
          <div className="flex items-center">
            <button 
              onClick={() => setIsSignInOpen(true)}
              className="glow-button px-6 py-2 rounded-full bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-300 transition-colors"
            >
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
