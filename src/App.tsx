import React from 'react';
import { GlobalStyle } from './styles/global/global';

import { DashBoard } from './pages/DashBoard';
import { ConfigUsers } from './pages/ConfigUsers';
import UpdateProductContext from './context/updateProductContext';
import UpdateUserContext from './context/updateUserContext';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { Login } from './pages/Login';
import AuthProvider from './context/authContext';
import { GeistProvider, CssBaseline } from '@geist-ui/react'


function App() {
  return (
    <GeistProvider>
      <UpdateProductContext>
        <UpdateUserContext>
          <BrowserRouter>
            <AuthProvider>
              <Routes>


                <Route path="/"  element={<Login />} />
                <Route path="/products"  element={<DashBoard />} />
                <Route path="/users" element={<ConfigUsers />} />

              </Routes>
              <GlobalStyle />
            </AuthProvider>
          </BrowserRouter>
        </UpdateUserContext>
      </UpdateProductContext>
    </GeistProvider>
  );
}

export default App;
