import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './src/App'
 
const route = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        
    }
])
const Index = () =>{
    return(
        <RouterProvider router={route}></RouterProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Index/>)