import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import usePostByIdState from '../hooks/post-by-id';
import { FormProps } from '../../interface/form-props';
import AlertError from '../../mui/AlertError';
import { sendDataToAPI } from '../../utils/api';
import { PostUpdateDto } from '../interface/post';

export default function Form(props: FormProps) {
  const id = props.id;
  const { loading, data, error } = usePostByIdState(id);
  const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    body: yup.string().required('Body is required'),
  });
  const initialValues: PostUpdateDto = {
    title: '',
    body: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: PostUpdateDto) => {
      if (id) {
        sendDataToAPI(`posts/${id}`, values, 'PUT');
      } else {
        sendDataToAPI(`posts`, values);
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
        <TextField
          fullWidth
          id="body"
          name="body"
          label="body"
          margin='normal'
          value={formik.values.body}
          onChange={formik.handleChange}
          error={formik.touched.body && Boolean(formik.errors.body)}
          helperText={formik.touched.body && formik.errors.body}
        />
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Grid>
  );
}
