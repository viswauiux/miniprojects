import React from 'react'
import { Outlet } from 'react-router-dom'
import { store } from './utils/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>

    <div className='min-h-[544px] md:min-h-screen  text-white' style={{background: "radial-gradient(120.55% 120.55% at 50% -44.29%, #4D4D4D 0%, #171717 83.84%)",height:"100dvh"}}>
      <Outlet/>
    </div>
    </Provider>
  )
}

export default App