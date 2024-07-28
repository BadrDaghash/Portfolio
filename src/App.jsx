
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import ContactUs from './Components/ContactUs/ContactUs'
import Notfound from './Components/Notfound'


let router = createBrowserRouter([
  {
    path:'/',element:<Layout/>,children:[
      { index: true, element: <Home/> },
      { path: 'about', element: <About/> },
      { path: 'projects', element: <Projects/> },
      { path: 'contactus', element: <ContactUs/> },
      { path: '*', element: <Notfound/> }
    ]
    
  },{
    path:"/Portfolio/",element: <Home/>
  }
])
function App() {

  return (
    <>
    
    <RouterProvider router={router}></RouterProvider>
 
    </>
  )
}

export default App
