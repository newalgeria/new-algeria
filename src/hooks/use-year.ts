import { useState, useEffect } from 'react';

interface YearResponse {
  year: number;
  sponsored_by?: string;
}

export const useYear = () => {
  const [year, setYear] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchYear = async () => {
      try {
        const response = await fetch('https://getfullyear.com/api/year');
        const data: YearResponse = await response.json();
        setYear(data.year);
      } catch (err) {
        setError('Failed to fetch year');
        setYear(new Date().getFullYear()); // Fallback
      } finally {
        setLoading(false);
      }
    };

    fetchYear();
  }, []);

  return { year, loading, error };
};