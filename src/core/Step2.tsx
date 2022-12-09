import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import FileUpload from 'react-material-file-upload';
import Papa from 'papaparse';

import { MAX_CSV_FILE_SIZE_IN_MB } from './constants';
import DefaultTemplate from './DefaultTemplate';
import type { Coordinates, HasSetStep } from './types';

const maxSize = 1024 * 1024 * MAX_CSV_FILE_SIZE_IN_MB;

interface IProps extends HasSetStep {
  setData: (
    data: Coordinates[] | ((prevData: Coordinates[]) => Coordinates[]),
  ) => void;
}

const Step2: React.FC<IProps> = ({ setData, setStep }) => {
  const [csvFiles, setCsvFiles] = useState<File[]>([]);

  useEffect(() => {
    if (csvFiles.length > 0) {
      Papa.parse(csvFiles[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          try {
            if (results.data.length === 0) {
              throw Error('No data!');
            }

            results.data.forEach(d => {
              const row = d as { [key: string]: string };

              if (Object.keys(row).length < 2) {
                throw Error('Invalid data!');
              }

              const [x, y] = Object.values(row);
              if (isNaN(+x) || isNaN(+y)) {
                throw Error('Invalid data!');
              } else {
                setData(prevData => [
                  ...prevData,
                  { x: parseInt(x, 10), y: parseInt(y, 10) },
                ]);
              }
            });

            setStep(currentStep => currentStep + 1);
          } catch (e) {
            setData([]);
            setCsvFiles([]);
            alert(e);
          }
        },
      });
    }
  }, [csvFiles]);

  return (
    <DefaultTemplate>
      <Typography variant="h1" gutterBottom sx={{ fontSize: 24 }}>
        Nice to meet you {localStorage.getItem('login')}
      </Typography>

      <div>
        <FileUpload
          value={csvFiles}
          onChange={setCsvFiles}
          title="Choose a file or drop it here"
          maxSize={maxSize}
          maxFiles={1}
          accept="text/csv"
        />
      </div>
    </DefaultTemplate>
  );
};

export default Step2;
