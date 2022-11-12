import { useState, useEffect } from 'react';
import { ApiResponse, getDataFromAPI } from '../../utils/api';
import { Post } from '../interface/post';

export default function usePostByIdState(id: string | undefined) {
  const [state, setState] = useState<ApiResponse<Post | undefined>>({
    loading: true,
    data: undefined,
    error: undefined,
  });
  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const data = await getDataFromAPI<Post>(`posts/${id}`);
          setState({ loading: false, data, error: undefined });
        } else {
          setState({ loading: false, data: undefined, error: undefined });
        }
      } catch (error) {
        setState({ loading: false, data: undefined, error });
      }
    })();
  }, [id]);

  return state;
}
