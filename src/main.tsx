import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyle from './styles/global';
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./hooks/useAuth";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <ToastContainer />
      <GlobalStyle />
    </AuthProvider>
  </React.StrictMode>
)
