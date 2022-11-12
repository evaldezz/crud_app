import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, CircularProgress, Grid, TextField, Checkbox, FormControlLabel, Box } from '@mui/material';
import useTodoByIdState from '../hooks/todos-by-id';
import { FormProps } from '../../interface/form-props';
import AlertError from '../../mui/AlertError';
import { sendDataToAPI } from '../../utils/api';
import { TodoUpdateDto } from '../interface/todo';

export default function Form(props: FormProps) {
  const id = props.id;
  const { loading, data, error } = useTodoByIdState(id);
  const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    completed: yup.boolean(),
  });
  const initialValues: TodoUpdateDto = {
    title: '',
    completed: false,
  };
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: TodoUpdateDto) => {
      if (id) {
        sendDataToAPI(`todos/${id}`, values, 'PUT');
      } else {
        sendDataToAPI(`todos`, values);
      }
      props.onSubmit();
    },
  });

  useEffect(() => {
    if (data) {
      formik.setValues(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Grid>
      {loading && <CircularProgress />}
      {error && (
        <AlertError>No se pudo obtener el Post por el ID {id}</AlertError>
      )}
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="title"
            margin='normal'
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <FormControlLabel
            control={<Checkbox color="success" />}
            label="Completed"
          />
        </Box>
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Grid>
  );
}
