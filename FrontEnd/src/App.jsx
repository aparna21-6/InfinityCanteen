import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './components/login'
import Signin from './components/Signin'

import './App.css'

function App() {
  const router = createBrowserRouter([{path:"/",element:<><Login/></>},{path:"/signin",element:<><Signin/></>}])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
