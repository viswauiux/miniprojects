import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './src/App'
import Home from './src/components/Home'
import Projects from './src/components/myProjects/Projects'
import Welcomebanner from './src/components/myProjects/Welcomebanner'
import Sidebar from './src/components/myProjects/sidebar/Sidebar'


const route = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                children:[
                    {
                        path:'/',
                        element:<Welcomebanner/>
                    },
                    {
                        path:'/myprojects',
                        element:<Projects/>
                    }
                   
                ]
            },
            {
                path:"/sidebar",
                element:<Sidebar/>
            }
        ]
    }
])
const Index = () =>{
    return(
        <RouterProvider router={route}></RouterProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Index/>)