import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from './core/Home';

const MainRouter: FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default MainRouter;
