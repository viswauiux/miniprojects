import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './src/App'
import MainContainer from './src/MainContainer'
import Main from './src/components/body/Main'
import Home from './src/components/home/Home'
import Designs from './src/components/home/Designs'
import Apps from './src/components/home/Apps'
import Aboutme from './src/components/home/Aboutme'
import { Contact } from './src/components/home/Contact'
 
const route = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {   
                path:'/',
                element:<MainContainer/>,
                children:[
                    {
                        path:'/',
                        element:<Main/>,
                        children:[
                            {   
                                path:'/',
                                element:<Home/>
                            },
                            {
                                path:'/UI Designs',
                                element:<Designs/>
                            },
                            {   
                                path:'/Apps',
                                element:<Apps/>
                            },
                            {
                                path:'/About Me',
                                element:<Aboutme/>
                            },
                            {
                                path:'/Contact Me',
                                element:<Contact/>
                            }
                        ]
                    }
                ]
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