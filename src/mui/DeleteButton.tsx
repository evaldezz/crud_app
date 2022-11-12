import React from 'react';
import { IconButton } from '@mui/material';
import { DeleteOutlined as DeleteIcon } from '@mui/icons-material';

export default function DeleteButton(props: any) {
  return (
    <IconButton color="error" {...props}>
      <DeleteIcon />
    </IconButton>
  );
}
