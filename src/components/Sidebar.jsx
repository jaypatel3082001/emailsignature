import React from 'react'
import Sidebarfunc1 from './Sidebarfunc1'
import Sidebarfunc2 from './Sidebarfunc2'

function Sidebar() {
    return (
        <div className='w-[400px] h-screen fixed'>
            <div className='w-full h-full bg-[#536697] flex flex-col'>

                <div className='flex text-white justify-around'>

                    <button className='py-5 px-3 w-full flex justify-center'><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" height="23px" width="23px" focusable="false" fill='currentcolor' aria-hidden="true" viewBox="0 0 24 24" data-testid="WorkIcon"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg></button>
                    <button className='py-5 px-3 w-full flex justify-center'><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" height="23px" width="23px" focusable="false" fill='currentcolor' aria-hidden="true" viewBox="0 0 24 24" data-testid="NotesIcon"><path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"></path></svg></button>
                    <button className='py-5 px-3 w-full flex justify-center'><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" height="23px" width="23px" focusable="false" fill='currentcolor' aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg></button>
                    <button className='py-5 px-3 w-full flex justify-center'><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" height="23px" width="23px" focusable="false" fill='currentcolor' aria-hidden="true" viewBox="0 0 24 24" data-testid="AppsIcon"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></svg></button>

                </div>
                <div className='bg-[#334165] text-white h-full'>
                    {/* <Sidebarfunc1 /> */}
                    <Sidebarfunc2 />

                </div>
                <div></div>

            </div>


        </div>
    )
}

export default Sidebar