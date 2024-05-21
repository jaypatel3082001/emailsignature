import React from 'react'

function Header() {
  return (
    <div className=' w-full px-3'>
       <div className=' w-full p-2 flex justify-between'>
        <div className="flex w-[103px]">
          <img src="https://www.krishangtechnolab.com/wp-content/uploads/2021/06/kt-logo.svg" alt="img not found" />
        </div>
        <div>
         <button className='px-3 mx-3 rounded-md border-[1px] py-1 border-black'>login</button>
         <button className='mx-3 rounded-full border-2 p-3'><svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></button>

        </div>

       </div>
        
    </div>
  )
}

export default Header