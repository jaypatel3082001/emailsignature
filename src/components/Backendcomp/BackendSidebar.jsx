import React from 'react'
import {Link} from 'react-router-dom'

function BackendSidebar() {
  return (
    <>
        <div className='flex'>
            <div className='h-screen'>
            <div className='w-full h-full bg-[#536697] flex flex-col p-5'>
            <div className='text-white justify-around'>

<button className='py-5 px-3 w-full flex ' aria-selected="true" ><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" height="23px" width="23px" focusable="false" fill='currentcolor' aria-hidden="true" viewBox="0 0 24 24" data-testid="WorkIcon"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg><span className='ml-3'>My Signatures</span></button>
<Link to="/"><button className='py-5 px-3 w-full flex ' ><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" height="23px" width="23px" focusable="false" fill='currentcolor' aria-hidden="true" viewBox="0 0 24 24" data-testid="NotesIcon"><path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"></path></svg><span className='ml-3'>Editor</span></button></Link>


</div>
{/* <div className='bg-[#334165] text-white h-full overflow-y-auto'> */}
{/* <Sidebarfunc1 /> */}



{/* {sidebarbtn1==true && <Sidebarfunc1 />}
{sidebarbtn1==true && <Sidebarfunc1 />} */}


{/* </div> */}

               
                {/* <div></div> */}

            </div>
            </div>
        </div>
    
    </>
  )
}

export default BackendSidebar