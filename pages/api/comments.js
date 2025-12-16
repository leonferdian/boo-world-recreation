import { comments } from '@/lib/mockData';

export default function handler(req, res) {
  const { sort = 'best' } = req.query;
  // Simple mock sorting logic
  const sorted = sort === 'new' 
    ? [...comments].reverse() 
    : comments;
  res.status(200).json(sorted);
}
