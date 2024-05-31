import React from 'react'
import Header from '../Header'
import BackendSidebar from './BackendSidebar'
import BackendContainer from './BackendContainer'

function Mysignature() {
  return (
    <> <div className='w-full h-full'>
    <Header />
   
    <div className='flex h-full w-full'>
      {/* <Sidebar /> */}
      <BackendSidebar />
      <BackendContainer/>
     
      {/* <Sidebar /> */}
       {/* <Maincontainer /> */}
    </div>

  </div>
  </>
  )
}

export default Mysignature