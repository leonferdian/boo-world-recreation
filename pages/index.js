import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import QuestionCard from '../components/QuestionCard';
import CommentList from '../components/CommentList';
import RelatedPosts from '../components/RelatedPosts';
import { questionData, comments, relatedPosts } from '../lib/mockData';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [commentsData, setCommentsData] = useState([]);
  const [sortBy, setSortBy] = useState('best');

  useEffect(() => {
    // Simulate API fetch
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        // In a real app, you would fetch from your API endpoint
        // const res = await fetch(`/api/comments?sort=${sortBy}`);
        // const data = await res.json();
        
        // For now, we'll use the mock data directly
        const sortedComments = sortBy === 'new' 
          ? [...comments].reverse() 
          : comments;
          
        setCommentsData(sortedComments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [sortBy]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <Layout>
      <div className="pt-16">
        <QuestionCard question={questionData} />
        
        <div className="mt-6">
          <CommentList comments={commentsData} loading={isLoading} />
        </div>
        
        <div className="mt-12">
          <RelatedPosts posts={relatedPosts} />
        </div>
      </div>
    </Layout>
  );
}
