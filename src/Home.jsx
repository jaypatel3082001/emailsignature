import { useState } from 'react'



import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Maincontainer from './components/Maincontainer'

function Home() {

  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-full'>
        <Header />
       
        <div className='flex h-full w-full'>
          {/* <Sidebar /> */}
         
          <Sidebar />
           <Maincontainer />
        </div>

      </div>

    </>
  )
}

export default Home

