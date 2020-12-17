import React from 'react';
import FrontPage from './FrontPage/FrontPage';
import './FrontPage/FrontPage.css';
import Stats from './FrontPage/Stats';
import TableForFront from './FrontPage/TableForFront';

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