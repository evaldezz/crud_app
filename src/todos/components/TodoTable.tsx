import React from 'react';
import { CircularProgress } from '@mui/material';
import AlertError from '../../mui/AlertError';
import Table from '../../mui/Table';
import useTodoListState from '../hooks/todo-list';
import TableContainer from '../../shared/TableContainer';
import columns from './TodoTable.headers';

export default function TodoList() {
  const { loading, data, error } = useTodoListState();
  return (
    <TableContainer>
      {loading && <CircularProgress />}
      {data.length > 0 && <Table rows={data} columns={columns} />}
      {error && <AlertError>No se pudo obtener la lista de Todos</AlertError>}
    </TableContainer>
  );
}
