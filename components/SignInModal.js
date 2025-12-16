import { X } from 'lucide-react';
import { useState } from 'react';

export default function SignInModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] pt-16">
      {/* Modal Container */}
      <div className="relative w-full max-w-md mx-4 bg-black rounded-lg p-8 border border-gray-800">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          {/* Header */}
          <div className="mb-6">
            <p className="text-xs text-gray-400 mb-2">just signed up</p>
            <h2 className="text-2xl font-bold text-white mb-3">MEET NEW PEOPLE</h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-yellow-400 text-lg">👥</span>
              <span className="text-white font-semibold">50,000,000+</span>
              <span className="text-gray-400 text-sm">members</span>
            </div>
          </div>

          {/* Illustration Placeholder */}
          <div className="mb-8 w-40 h-40 flex items-center justify-center">
            <div className="relative">
              {/* Cyan Planet */}
              <div className="w-32 h-32 rounded-full bg-cyan-400 opacity-80 flex items-center justify-center">
                {/* Ghost/Boo Character */}
                <div className="text-4xl">👻</div>
              </div>
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-cyan-400 opacity-30"></div>
            </div>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-400 mb-6">
            By signing in, you agree to our{' '}
            <a href="https://boo.world" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Terms
            </a>
            {' '}and{' '}
            <a href="https://boo.world" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Privacy Policy
            </a>
          </p>

          {/* Sign In Options */}
          <div className="w-full space-y-3">
            {/* Apple Sign In */}
            <a
              href="https://boo.world/rive/landing_planet.riv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-full transition-colors border border-gray-800"
            >
              <span className="text-lg">🍎</span>
              <span>SIGN IN WITH APPLE</span>
            </a>

            {/* Google Sign In */}
            <a
              href="https://boo.world/rive/landing_planet.riv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-full transition-colors border border-gray-800"
            >
              <span className="text-lg">🔍</span>
              <span>SIGN IN WITH GOOGLE</span>
            </a>

            {/* Email Sign In */}
            <a
              href="https://boo.world/rive/landing_planet.riv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-full transition-colors border border-gray-800"
            >
              <span className="text-lg">✉️</span>
              <span>SIGN IN WITH EMAIL</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
