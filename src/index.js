import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Form from './components/Form';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Slides from './Slides/Slide';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/form",
    element: <Form></Form>,
  },
  {
    path:"/dashBoard",
    element:<dashBoard></dashBoard>
  }
  ,
  {
    path:"/Slides",
    element:<Slides></Slides>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
