import React from 'react'
import Tempate from './Tempate'
import { useDispatch, useSelector } from 'react-redux'
function Maincontainer() {
    const inputs = useSelector((state) => state.inputs);
    
    // const inputVVlu1 = props.inputVVlu
    // console.log(props)
  return (
    <div className='w-full h-auto bg-[#fe8004] '>
        <div className="h-full w-full bg-yellow-200 p-10 flex justify-center">
            <div className="wrap w-[70%] h-full">
               <div className="head bg-[#536697]">
               <div className=" w-full flex p-3 border-b-[1px] border-gray-300">
                    <ul className='flex'>
                        <li className='px-1'><svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" fill='rgb(220 53 69)' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg></li>
                        <li className='px-1'><svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" fill='rgb(13 110 253)' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg></li>
                        <li className='px-1'><svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" fill='rgb(255 193 7)' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg></li>
                    </ul>
                </div>
                <div className="w-full flex flex-col py-3 px-4">
                    
                    <h2>To: Your Recipient</h2>
                    <h2>Subject: Check out my new Email Signature</h2>
                </div>
               </div>
                <div className="body bg-white w-full p-5">
                    <Tempate  inputVVlu={inputs} />

                </div>

            </div>
            
        </div>
        
    </div>
  )
}

export default Maincontainer