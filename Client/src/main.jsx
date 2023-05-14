import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Chocolates from './components/Chocolates.jsx'
import AddChocolate from './components/AddChocolate.jsx'
import Update from './components/Update.jsx'
import Login from './components/user/Login.jsx'
import AuthProvider from './context/AuthProvider.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Chocolates />, loader: () => fetch('http://localhost:5000/chocolates') },

      { path: 'chocolate/new', element: <AddChocolate /> },
      { path: '/update/:id', element: <Update />, loader: ({ params }) => fetch(`http://localhost:5000/chocolates/${params.id}`) }
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} />  */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
