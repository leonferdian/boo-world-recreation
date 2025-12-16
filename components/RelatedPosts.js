import Link from 'next/link';
import { MessageCircle, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function RelatedPosts({ posts = [] }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (posts.length === 0) return null;

  // Safely format number based on client/server
  const formatNumber = (num) => {
    if (typeof num !== 'number') return '0';
    return isClient ? num.toLocaleString() : num.toString();
  };

  return (
    <div className="mt-12">
      <h2 className="text-sm font-semibold text-white mb-4">You might also like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <a 
            key={post.id} 
            href="https://boo.world/u/questions/dwsQOX/what-would-you-choose-a-relationship-full-of"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors"
          >
            <h3 className="font-medium text-white mb-3 line-clamp-2 h-10">{post.title || 'Untitled Post'}</h3>
            <div className="flex items-center text-xs text-gray-400 gap-3 flex-wrap">
              <span className="flex items-center whitespace-nowrap">
                <MessageCircle size={14} className="mr-1 flex-shrink-0" />
                <span>{formatNumber(post.comments || 0)}</span>
              </span>
              <span className="flex items-center whitespace-nowrap">
                <Eye size={14} className="mr-1 flex-shrink-0" />
                <span>{formatNumber(post.views || 0)}</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
