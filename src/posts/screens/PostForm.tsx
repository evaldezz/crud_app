import React from 'react';
import Form from '../components/PostForm';
import { useParams, useNavigate } from 'react-router-dom';

export default function PostForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <Form id={id} onSubmit={() => navigate(-1)} />;
}
