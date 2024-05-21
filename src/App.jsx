import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Maincontainer from './components/Maincontainer'

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen'> 
    <Header />
    <div className='flex'>
    <Sidebar />
    <Maincontainer />
    </div>
    
    </div>
      
    </>
  )
}

export default App
