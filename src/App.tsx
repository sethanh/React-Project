import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import {BrowserRouters} from '@Routes/index';
import './App.css';

function App() {
  return (
    <RouterProvider router={BrowserRouters} />
  );
}

export default App;
