import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { MoviesProvider } from './context/MoviesContext';
import { router } from './router';

function App() {
  return (
    <React.StrictMode>
      <MoviesProvider>
        <RouterProvider router={router}/>
      </MoviesProvider>
    </React.StrictMode> 
  )
}

export default App
