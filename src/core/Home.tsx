import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

import isAuthenticated from '../utils/helpers/isAuthenticated';
import { FIRST_STEP, SECOND_STEP, THIRD_STEP, LAST_STEP } from './constants';
import type { Coordinates } from './types';

const Wrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: React.FC = () => {
  const [step, setStep] = useState(
    isAuthenticated() ? SECOND_STEP : FIRST_STEP,
  );
  const [data, setData] = useState<Coordinates[]>([]);
  const [xAxisLabel, setXAxisLabel] = useState('');
  const [yAxisLabel, setYAxisLabel] = useState('');

  return (
    <Wrapper>
      {step === FIRST_STEP && <Step1 setStep={setStep} />}
      {step === SECOND_STEP && <Step2 setStep={setStep} setData={setData} />}
      {step === THIRD_STEP && (
        <Step3
          setStep={setStep}
          setXAxisLabel={setXAxisLabel}
          setYAxisLabel={setYAxisLabel}
        />
      )}
      {step === LAST_STEP && (
        <Step4 xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} data={data} />
      )}
    </Wrapper>
  );
};

export default Home;
