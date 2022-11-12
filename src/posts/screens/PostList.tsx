import { Typography } from '@mui/material';
import React from 'react';
import CreateButton from '../../mui/CreateButton';
import PostTable from '../components/PostTable';

export default function PostList() {
  return (
    <>
      <Typography variant='h5' fontWeight='bold' align='center' color='primary'>Posts List</Typography>
      <CreateButton to="new" />
      <PostTable />;
    </>
  );
}
