import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import useFetch from './useFetch';

interface Post {
  id: number;
  title: string;
  body: string;
}

const getInitialPage = () => {
  const params = new URLSearchParams(window.location.search);
  const pageParam = params.get('page');

  return pageParam ? parseInt(pageParam, 10) : 1;
};

/* This hook handles pagination and url query params */
export default function usePostsQuery() {
  const [page, setPage] = useState<number>(getInitialPage());
  const [limit, setLimit] = useState<number>(10);

  const { data, loading } = useFetch<Post[]>(
    'https://jsonplaceholder.typicode.com/posts?_page=' +
      page +
      '&_limit=' +
      limit
  );

  // handle url change
  useEffect(() => {
    const handleUrlChange = () => {
      setPage(getInitialPage());
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleLimitChange = useCallback((limit: number) => {
    setLimit(limit);
  }, []);

  // changing query params on page change
  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('page', newPage.toString());

    window.history.pushState({}, '', newUrl);
  }, []);

  return {
    data,
    limit,
    page,
    handleLimitChange,
    handlePageChange,
    loading,
  };
}
