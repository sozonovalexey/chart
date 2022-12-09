import React from 'react';
import { TextField, Typography, Button } from '@mui/material';
import { useFormik } from 'formik';
import { InferType, object, string } from 'yup';

import theme from '../theme';
import DefaultTemplate from './DefaultTemplate';
import type { HasSetStep } from './types';

const validationSchema = object({
  login: string().required(),
});

type InputType = InferType<typeof validationSchema>;

const Step1: React.FC<HasSetStep> = ({ setStep }) => {
  const initialValues: InputType = {
    login: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: InputType) => {
      const { login } = values;
      localStorage.setItem('login', login);
      setStep(prevStep => prevStep + 1);
    },
  });

  return (
    <DefaultTemplate>
      <Typography variant="h1" gutterBottom sx={{ fontSize: 24 }}>
        Hi stranger! Plz enter your name
      </Typography>
      <TextField
        id="login"
        autoFocus
        placeholder=""
        value={formik.values.login}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.login && formik.touched.login}
        fullWidth
        sx={{ marginBottom: theme.spacing(1) }}
      />
      <Button
        variant="contained"
        disabled={!formik.values.login}
        onClick={formik.submitForm}>
        Next
      </Button>
    </DefaultTemplate>
  );
};

export default Step1;
