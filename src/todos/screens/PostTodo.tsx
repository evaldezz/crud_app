import React from 'react';
import Todo from '../components/TodoForm';
import { useParams, useNavigate } from 'react-router-dom';

export default function PostTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <Todo id={id} onSubmit={() => navigate(-1)} />;
}
