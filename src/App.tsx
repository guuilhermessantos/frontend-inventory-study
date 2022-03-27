import React from 'react';
import { GlobalStyle } from './styles/global/global';

import { DashBoard } from './pages/DashBoard';
import { ConfigUsers } from './pages/ConfigUsers';
import UpdateProductContext from './context/updateProductContext';
import {BrowserRouter,Route} from 'react-router-dom'


function App() {
  return (
  <UpdateProductContext>
    <BrowserRouter>
    {/* <Route path=""  element={<DashBoard />} />
    <Route path="/users" element={<ConfigUsers />} /> */}

    
        <DashBoard />
        <GlobalStyle />
    </BrowserRouter>
  </UpdateProductContext>
  );
}

export default App;
