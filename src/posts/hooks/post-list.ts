import { useState, useEffect } from 'react';
import { ApiResponse, getDataFromAPI } from '../../utils/api';
import { Post } from '../interface/post';

export default function usePostListState() {
  const [state, setState] = useState<ApiResponse<Post[]>>({
    loading: true,
    data: [],
    error: undefined,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = await getDataFromAPI<Post[]>('posts');
        setState({ loading: false, data, error: undefined });
      } catch (error) {
        setState({ loading: false, data: [], error });
      }
    })();
  }, []);

  return state;
}
