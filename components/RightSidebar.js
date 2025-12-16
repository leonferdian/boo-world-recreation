import Link from 'next/link';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { relatedPosts } from '../lib/mockData';

export default function RightSidebar({ isOpen }) {
  if (!isOpen) return null;

  return (
    <aside className="fixed right-0 top-16 bottom-0 w-80 bg-black border-l border-gray-800 overflow-y-auto">
      <div className="p-4">
        {/* Related Posts Header */}
        <h2 className="text-white text-sm font-semibold mb-4">Related Posts</h2>

        {/* Related Posts List */}
        <div className="space-y-4">
          {relatedPosts.map((post) => (
            <a
              key={post.id}
              href="https://boo.world/u/questions/dwsQOX/what-would-you-choose-a-relationship-full-of"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-gray-900 hover:bg-gray-800 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
            >
              {/* Post Header */}
              <div className="mb-2">
                <p className="text-xs text-gray-500 mb-1">Question of the Day</p>
                <h3 className="text-sm font-medium text-white line-clamp-2 hover:text-cyan-400">
                  {post.title}
                </h3>
              </div>

              {/* Post Date */}
              <p className="text-xs text-gray-500 mb-2">{post.date}</p>

              {/* Post Stats */}
              <div className="flex items-center text-xs text-gray-400 gap-3 flex-wrap">
                <span className="flex items-center whitespace-nowrap">
                  <Heart size={14} className="mr-1 flex-shrink-0" />
                  <span>{post.likes}</span>
                </span>
                <span className="flex items-center whitespace-nowrap">
                  <MessageCircle size={14} className="mr-1 flex-shrink-0" />
                  <span>{post.comments}</span>
                </span>
                <button className="flex items-center hover:text-cyan-400 flex-shrink-0">
                  <Share2 size={14} />
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
