import React from 'react';
import FrontPage from './FrontPage';
import './FrontPage.css';
import Stats from './Stats';
import TableForFront from './TableForFront';

function Home() {
  return (
    <>
      <FrontPage />
      <Stats />
      <TableForFront />
    </>
  );
}

export default Home;