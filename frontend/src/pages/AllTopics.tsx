import { useEffect, useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import { topicsAPI } from '../services/api';

export const AllTopics = () => {
  const [topics, setTopics] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    topicsAPI.getAll()
      .then((res) => {
        const data = res.data?.data?.topics || [];
        setTopics(data);
      })
      .catch((err) => {
        setError(err?.message || 'Failed to load topics');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Topics</h2>
      {loading && <p>Loading topics...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {topics.map((t) => (
          <div key={t.id} className="p-4 rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold text-lg">{t.topicName || t.name}</h3>
            <p className="text-sm text-gray-600">Language: {t.language || 'N/A'}</p>
            <p className="text-sm text-gray-600">Difficulty: {t.difficulty || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTopics;
