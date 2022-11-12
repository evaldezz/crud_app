import { useState, useEffect } from 'react';
import { ApiResponse, getDataFromAPI } from '../../utils/api';
import { Todo } from '../interface/todo';

export default function useTodoListState() {
  const [state, setState] = useState<ApiResponse<Todo[]>>({
    loading: true,
    data: [],
    error: undefined,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = await getDataFromAPI<Todo[]>('todos');
        setState({ loading: false, data, error: undefined });
      } catch (error) {
        setState({ loading: false, data: [], error });
      }
    })();
  }, []);

  return state;
}
