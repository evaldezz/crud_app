import React from 'react';
import { CircularProgress } from '@mui/material';
import AlertError from '../../mui/AlertError';
import Table from '../../mui/Table';
import TableContainer from '../../shared/TableContainer';
import usePostListState from '../hooks/post-list';
import columns from './PostTable.headers';


export default function PostTable() {
  const { loading, data, error } = usePostListState();
  return (
    <TableContainer>
      {loading && <CircularProgress />}
      {data.length > 0 && <Table rows={data} columns={columns} />}
      {error && <AlertError>No se pudo obtener la lista de Posts</AlertError>}
    </TableContainer>
  );
}
