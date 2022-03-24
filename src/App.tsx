import React from 'react';
import { GlobalStyle } from './styles/global/global';

import { DashBoard } from './pages/DashBoard';
import { ConfigUsers } from './pages/ConfigUsers';
import UpdateProductContext from './context/updateProductContext';


function App() {
  return (
    <UpdateProductContext>
      <DashBoard />
      {/* <ConfigUsers /> */}
      <GlobalStyle />
    </UpdateProductContext>
  );
}

export default App;
