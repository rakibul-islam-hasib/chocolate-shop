import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Chocolates from './components/Chocolates.jsx'
import AddChocolate from './components/AddChocolate.jsx'
const router = createBrowserRouter([
  {
    path :'/', 
    element : <App />, 
    children : [
      {path : '/' , element : <Chocolates />}, 
      {path : 'chocolate/new' , element : <AddChocolate /> }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
