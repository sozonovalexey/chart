import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
} from 'victory';

import type { Coordinates } from './types';

interface IProps {
  xAxisLabel: string;
  yAxisLabel: string;
  data: Coordinates[];
}

const Step4: React.FC<IProps> = ({ data, xAxisLabel, yAxisLabel }) => {
  const columns: GridColDef[] = [
    {
      field: 'x',
      sortable: false,
      headerName: xAxisLabel,
      flex: 1,
      minWidth: 100,
      headerAlign: 'center',
    },
    {
      field: 'y',
      sortable: false,
      headerName: yAxisLabel,
      flex: 1,
      width: 100,
      headerAlign: 'center',
    },
  ];

  const rows = data.map(({ x, y }, index) => ({
    id: index,
    x,
    y,
  }));

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ textAlign: 'center', width: 800, padding: '0 16px' }}>
      <div>
        <Typography variant="h1" gutterBottom sx={{ fontSize: 24 }}>
          Here is the result:
        </Typography>

        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '50%', height: 400 }}>
            <DataGrid
              disableSelectionOnClick
              disableColumnSelector
              disableColumnFilter
              disableColumnMenu
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </Box>
          <Box sx={{ width: '50%' }}>
            <VictoryChart theme={VictoryTheme.material}>
              <VictoryScatter
                style={{ data: { fill: '#c43a31' } }}
                size={7}
                data={data}
              />
              <VictoryAxis
                dependentAxis
                axisLabelComponent={<VictoryLabel dy={-25} />}
                label={yAxisLabel}
              />
              <VictoryAxis
                label={xAxisLabel}
                axisLabelComponent={<VictoryLabel dy={25} />}
              />
            </VictoryChart>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Step4;
