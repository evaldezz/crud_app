import { Edit as EditIcon } from '@mui/icons-material';
import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
// import PostForm from '../../posts/screens/PostForm';
import { modalStyle } from '../../utils/modal-styles';
import Form from './TodoForm';
import { useNavigate } from 'react-router-dom';

export default function TodoEditModal ({ id }: { id: string }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <EditIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <Typography>Editar todo</Typography>
          <Form id={id} onSubmit={() => navigate(1)} />
        </Box>
      </Modal>
    </div>
  );
}
