import { universes } from '@/lib/mockData';

export default function handler(req, res) {
  res.status(200).json(universes);
}
