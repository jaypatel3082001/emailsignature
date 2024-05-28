import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBaner } from '../reduxfiles/slice/Slice';
import Htmleditor from './Htmleditor'


function Sidebarfunc4() {
    const assetsUrl = import.meta.env.VITE_APP_ASSETS_URL;
    const dispatch = useDispatch();
    const inputs = useSelector((state)=>state.inputs)
    const [htmlstate,setHtmlstate]=useState(false)
    const inban = inputs.banner
    const handleBanner = (event) =>{
        const file = event.target.files[0];
       
        const refader = new FileReader();
        refader.readAsDataURL(file);
        refader.onloadend = () => {
            dispatch(setBaner(refader.result));
        };

    }
    const handleHtml = (e)=>{
        setHtmlstate(!htmlstate)
        console.log("jkkl",htmlstate)
    }
    return (
        <> 
        <div>
            <h1 className='text-xl font-extrabold pl-3 py-2'>Features</h1>
            {/* <p className='flex justify-center my-3 text-lg font-lg'>FREE TEMPLATES</p> */}
            <div className='w-full h-full'>
                <div className="w-full">
                    <div className="imagewrap py-5 pr-5">
                        <div className='w-full h-full'><div className="bg-white text-black py-2 px-5 text-lg rounded-md flex items-center mb-3 mx-3 hover:mx-0" ><span className='bg-white text-yellow-400'><img src={`${assetsUrl}f1.svg`} alt="" /></span><span className='px-3'>Upload Banner 
                        {/* <input type="file" placeholder='upload'  onClick={handleBanner}/> */}
                        <input type="file" placeholder='Upload Image'
                           className='border-none absolute opacity-0 left-3 mt-[-6px] py-1' onChange={handleBanner} />
                        </span></div></div>
                        <div className='w-full h-full'><div className="bg-white text-black py-2 px-5 text-lg rounded-md flex items-center mb-3 mx-3 hover:mx-0">
                            <span className='bg-white text-yellow-400'><img src={`${assetsUrl}f2.svg`} alt="" /></span><span className='px-3'>Disclaimer</span>
                            </div></div>
                        <div className='w-full h-full'><div className="bg-white text-black py-2 px-5 text-lg rounded-md flex items-center mb-3 mx-3 hover:mx-0">
                        <span className='bg-white text-yellow-400'><img src={`${assetsUrl}f3.svg`} alt="" /></span><span className='px-3'>Download App</span>
                            </div></div>
                        <div className='w-full h-full'><div className="bg-white text-black py-2 px-5 text-lg rounded-md flex items-center mb-3 mx-3 hover:mx-0" onClick={handleHtml}>
                        <span className='bg-white text-yellow-400'><img src={`${assetsUrl}f4.svg`} alt="" /></span><span className='px-3'>HTML</span>
                        </div></div>
                         <div className={` absolute top-0 right-0 left-[430px] z-10 h-full ${htmlstate == true ? 'block ease-in-out transition-width duration-1000': 'hidden'}`}>
                            <div className={`flex  h-full w-auto bg-white text-black p-5 `}>
                                <div className="flex px-3">
                                    <Htmleditor />
                                    <div>
                                    {/* <Tempate /> */}
                                    </div>
                                   

                                </div>
                                </div> 
                           
                        </div>
                        <div className='w-full h-full'><div className="bg-white text-black py-2 px-5 text-lg rounded-md flex items-center mb-3 mx-3 hover:mx-0">
                        <span className='bg-white text-yellow-400'><img src={`${assetsUrl}f5.svg`} alt="" /></span><span className='px-3'>Quote</span>
                            </div></div>
                        <div className='w-full h-full'><div className="bg-white text-black py-2 px-5 text-lg rounded-md flex items-center mb-3 mx-3 hover:mx-0">
                        <span className='bg-white text-yellow-400'><img src={`${assetsUrl}f6.svg`} alt="" /></span><span className='px-3'>Video</span>
                            </div></div>
                        <div className='w-full h-full'><div className="bg-white text-black py-2 px-5 text-lg rounded-md flex items-center mb-3 mx-3 hover:mx-0">
                        <span className='bg-white text-yellow-400'><img src={`${assetsUrl}f7.svg`} alt="" /></span><span className='px-3'>Video Conference</span>
                            </div></div>
                       
          
                        {/* <div className="bg-green-700"></div> */}
                  
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Sidebarfunc4