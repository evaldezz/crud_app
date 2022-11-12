import { useState, useEffect } from 'react';
import { ApiResponse, getDataFromAPI } from '../../utils/api';
import { Todo } from '../interface/todo';

export default function useTodoByIdState(id: string | undefined) {
  const [state, setState] = useState<ApiResponse<Todo | undefined>>({
    loading: true,
    data: undefined,
    error: undefined,
  });
  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const data = await getDataFromAPI<Todo>(`todos/${id}`);
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
