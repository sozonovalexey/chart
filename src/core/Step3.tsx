import React from 'react';
import { TextField, Typography, Button } from '@mui/material';
import { useFormik } from 'formik';
import { InferType, object, string } from 'yup';

import theme from '../theme';
import type { HasSetStep } from './types';
import { DEFAULT_X_LABEL, DEFAULT_Y_LABEL } from './constants';
import DefaultTemplate from './DefaultTemplate';

const validationSchema = object({
  xAxisLabel: string(),
  yAxisLabel: string(),
});

type InputType = InferType<typeof validationSchema>;

interface IProps extends HasSetStep {
  setXAxisLabel: (newLabel: string) => void;
  setYAxisLabel: (newLabel: string) => void;
}

const Step3: React.FC<IProps> = ({ setXAxisLabel, setYAxisLabel, setStep }) => {
  const initialValues: InputType = {
    xAxisLabel: '',
    yAxisLabel: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: InputType) => {
      const { xAxisLabel, yAxisLabel } = values;

      setXAxisLabel(xAxisLabel || DEFAULT_X_LABEL);
      setYAxisLabel(yAxisLabel || DEFAULT_Y_LABEL);

      setStep(currentStep => currentStep + 1);
    },
  });

  return (
    <DefaultTemplate>
      <Typography variant="h1" gutterBottom sx={{ fontSize: 24 }}>
        Fine, now please specify names of columns for “X” and “Y” dimensions (or
        leave them default)
      </Typography>
      <TextField
        id="xAxisLabel"
        autoFocus
        placeholder="Default name is “X”"
        value={formik.values.xAxisLabel}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.xAxisLabel && formik.touched.xAxisLabel}
        fullWidth
        sx={{ marginBottom: theme.spacing(1) }}
      />
      <TextField
        id="yAxisLabel"
        placeholder="Default name is “Y”"
        value={formik.values.yAxisLabel}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.yAxisLabel && formik.touched.yAxisLabel}
        fullWidth
        sx={{ marginBottom: theme.spacing(1) }}
      />
      <Button variant="contained" onClick={formik.submitForm}>
        Next
      </Button>
    </DefaultTemplate>
  );
};

export default Step3;
