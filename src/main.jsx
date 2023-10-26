import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import IndexPage from './assets/index.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },{
    path: "/Gastos",
    element: <IndexPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
