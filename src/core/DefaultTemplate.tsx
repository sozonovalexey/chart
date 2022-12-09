import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/material';

const DefaultTemplate: React.FC<PropsWithChildren> = ({ children }) => (
  <Box
    component="form"
    noValidate
    autoComplete="off"
    sx={{ textAlign: 'center', maxWidth: 480, padding: '0 16px' }}>
    <div>{children}</div>
  </Box>
);

export default DefaultTemplate;
