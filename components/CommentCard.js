import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CommentCard({ comment = {} }) {
  const [isClient, setIsClient] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment?.likes || 0);
  const [imageError, setImageError] = useState(false);

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
  const user = comment?.user || {};
  const timeAgo = comment?.timeAgo || 'Just now';

  return (
    <div className="border-b border-gray-800 py-4 px-4">
      <div className="flex">
        {/* User avatar */}
        <div className="flex-shrink-0 mr-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white overflow-hidden flex-shrink-0">
            {user?.avatar && !imageError ? (
              <img 
                src={user.avatar}
                onError={() => setImageError(true)}
                alt={user.name || 'User'}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-sm font-medium">
                {user?.name ? user.name.charAt(0).toUpperCase() : '?'}
              </span>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* User info header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2 flex-wrap">
              <span className="font-medium text-white text-sm">{user?.name || 'Anonymous'}</span>
              {user?.personality && (
                <span className="text-xs bg-cyan-600 text-white px-1.5 py-0.5 rounded-full">
                  {user.personality}
                </span>
              )}
              {user?.zodiac && (
                <span className="text-xs bg-purple-600 text-white px-1.5 py-0.5 rounded-full">
                  {user.zodiac}
                </span>
              )}
              <span className="text-xs text-gray-500">• {timeAgo}</span>
            </div>
            <button className="text-gray-500 hover:text-white transition-colors flex-shrink-0">
              <MoreHorizontal size={16} />
            </button>
          </div>

          {/* Comment text */}
          <p className="text-gray-200 text-sm mb-3">
            {comment.text}
          </p>

          {/* Comment image if exists */}
          {comment?.image && !imageError && (
            <div className="mb-3 rounded-lg overflow-hidden max-w-xs bg-gray-800">
              <img 
                src={comment.image}
                onError={() => setImageError(true)}
                alt="Comment attachment" 
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Comment actions */}
          <div className="flex items-center text-xs text-gray-400 space-x-4">
            <button 
              onClick={toggleLike}
              className={`flex items-center hover:text-red-500 transition-colors ${isLiked ? 'text-red-500' : ''}`}
            >
              <Heart size={14} className="mr-1" fill={isLiked ? 'currentColor' : 'none'} />
              <span>{isClient ? likeCount.toLocaleString() : likeCount}</span>
            </button>
            <a 
              href="https://boo.world/u/questions/dwsQOX/what-would-you-choose-a-relationship-full-of"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-cyan-400 transition-colors"
            >
              <MessageCircle size={14} className="mr-1" />
              <span>Reply</span>
            </a>
            <a 
              href="https://boo.world/u/questions/dwsQOX/what-would-you-choose-a-relationship-full-of"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-green-400 transition-colors"
            >
              <Share2 size={14} className="mr-1" />
              <span>Share</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
