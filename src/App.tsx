import React from 'react';
import { GlobalStyle } from './styles/global/global';

import { DashBoard } from './pages/DashBoard';
import { ConfigUsers } from './pages/ConfigUsers';
import UpdateProductContext from './context/updateProductContext';
import UpdateUserContext from './context/updateUserContext';
import {BrowserRouter,Route, Routes} from 'react-router-dom'


function App() {
  return (
  <UpdateProductContext>
  <UpdateUserContext>
    <BrowserRouter>
      <Routes>

        <Route path="/"  element={<DashBoard />} />
        <Route path="/users" element={<ConfigUsers />} />

    
        {/* <DashBoard /> */}
        {/* <ConfigUsers /> */}
      </Routes>
    </BrowserRouter>
  <GlobalStyle />
  </UpdateUserContext>
  </UpdateProductContext>
  );
}

export default App;
