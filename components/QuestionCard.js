import { Heart, MessageCircle, Share2, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import SignInModal from './SignInModal';

export default function QuestionCard({ question = {} }) {
  const [isClient, setIsClient] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(question?.likes || 0);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  // Safely get user data with fallbacks
  const user = question?.user || {};
  const commentCount = question?.comments?.length || question?.commentCount || 0;
  const viewCount = question?.views || 0;
  const timeAgo = question?.date || 'Just now';

  return (
    <>
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(34, 211, 238, 0.5); }
          50% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.8); }
        }
        .glow-button {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      <div className="bg-gray-900 rounded-lg border border-gray-800 mb-6 overflow-hidden w-full">
        {/* Header with back button and badge */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
          <a 
            href="https://boo.world"
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            <ChevronLeft size={20} />
          </a>
          <span className="bg-cyan-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
            Questions
          </span>
          <div className="w-6 flex-shrink-0"></div>
        </div>

        {/* Question Title */}
        <div className="px-4 py-4 border-b border-gray-800">
          <h1 className="text-lg font-bold text-white leading-tight break-words">
            {question?.title || 'No title'}
          </h1>
        </div>

        {/* User info and stats */}
        <div className="px-4 py-3 border-b border-gray-800">
          <div className="flex items-center justify-between mb-3 gap-2">
            <div className="flex items-center space-x-2 min-w-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xs font-medium overflow-hidden flex-shrink-0">
                {user?.avatar ? (
                  <img 
                    src={user.avatar}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.textContent = user?.name ? user.name.charAt(0).toUpperCase() : '?';
                    }}
                    alt={user.name || 'User'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{user?.name ? user.name.charAt(0).toUpperCase() : '?'}</span>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-white truncate">{user?.name || 'Anonymous'}</p>
                <p className="text-xs text-gray-500">{timeAgo}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500 flex-shrink-0">Comment</span>
          </div>

          {/* Stats - fixed width to prevent offset */}
          <div className="flex items-center gap-4 text-xs text-gray-400 flex-wrap">
            <span className="flex items-center whitespace-nowrap">
              <Heart size={14} className="mr-1 flex-shrink-0" />
              <span>{isClient ? likeCount.toLocaleString() : likeCount}</span>
            </span>
            <span className="flex items-center whitespace-nowrap">
              <MessageCircle size={14} className="mr-1 flex-shrink-0" />
              <span>{isClient ? commentCount.toLocaleString() : commentCount}</span>
            </span>
            <button className="flex items-center hover:text-cyan-400 transition-colors flex-shrink-0">
              <Share2 size={14} />
            </button>
          </div>
        </div>

        {/* Community CTA */}
        <div className="px-4 py-4 border-b border-gray-800">
          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Questions Community</h3>
            <p className="text-sm text-gray-300 mb-3">The questions community, chat, and discussion.</p>
            <button 
              onClick={() => setIsSignInOpen(true)}
              className="glow-button block w-full bg-cyan-400 text-black font-semibold py-2 rounded-full text-sm hover:bg-cyan-300 transition-colors text-center"
            >
              JOIN NOW
            </button>
          </div>
        </div>

        {/* Tags */}
        {question?.tags?.length > 0 && (
          <div className="px-4 py-3 border-b border-gray-800 flex flex-wrap gap-2">
            {question.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-cyan-400/20 text-cyan-400 text-xs font-medium px-2 py-1 rounded-full hover:bg-cyan-400/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="px-4 py-3 flex items-center justify-between">
          <button 
            onClick={toggleLike}
            className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
              isLiked ? 'text-red-500' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
            <span>{isLiked ? 'Liked' : 'Like'}</span>
          </button>
          <a 
            href="https://boo.world/u/questions/dwsQOX/what-would-you-choose-a-relationship-full-of"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <MessageCircle size={16} />
            <span>Comment</span>
          </a>
          <a 
            href="https://boo.world/u/questions/dwsQOX/what-would-you-choose-a-relationship-full-of"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <Share2 size={16} />
            <span>Share</span>
          </a>
        </div>
      </div>
    </>
  );
}