import { Typography } from '@mui/material';
import React from 'react';
import CreateButton from '../../mui/CreateButton';
import TodoTable from '../components/TodoTable';

export default function TodoList() {
  return (
    <>
      <Typography variant='h5' fontWeight='bold' align='center' color='primary'>Todos List</Typography>
      <CreateButton to="new" />
      <TodoTable />
    </>
  );
}
