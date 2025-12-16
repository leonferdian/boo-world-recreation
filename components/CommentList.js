import { useState, useEffect } from 'react';
import CommentCard from './CommentCard';

export default function CommentList({ comments = [], loading = false }) {
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex space-x-4">
              <div className="rounded-full bg-gray-800 h-10 w-10"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-800 rounded"></div>
                  <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-500 mb-2">No comments yet</div>
        <p className="text-sm text-gray-400">Be the first to share what you think!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
