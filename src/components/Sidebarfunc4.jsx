import React from 'react'

function Sidebarfunc4() {
    const assetsUrl = import.meta.env.VITE_APP_ASSETS_URL;
    return (
        <> 
        <div>
            <h1 className='text-xl font-extrabold pl-3 py-2'>Features</h1>
            {/* <p className='flex justify-center my-3 text-lg font-lg'>FREE TEMPLATES</p> */}
            <div className='w-full h-full bg-red-400'>
                <div className="w-full">
                    <div className="imagewrap py-5 pr-5">
                        <div className='w-full h-full'><div className="bg-white text-black py-2 px-5 text-lg rounded-md flex items-center mb-3 mx-3 hover:mx-0"><span className='bg-white text-yellow-400'><img src={`${assetsUrl}f1.svg`} alt="" /></span><span className='px-3'>Upload Banner</span></div></div>
                        <div className='w-full h-full'><div className="bg-white text-black py-2 px-5 text-lg rounded-md flex items-center mb-3 mx-3 hover:mx-0">
                            <span className='bg-white text-yellow-400'><img src={`${assetsUrl}f2.svg`} alt="" /></span><span className='px-3'>Disclaimer</span>
                            </div></div>
                        <div className='w-full h-full'><div className="bg-white text-black py-2 px-5 text-lg rounded-md flex items-center mb-3 mx-3 hover:mx-0">
                        <span className='bg-white text-yellow-400'><img src={`${assetsUrl}f3.svg`} alt="" /></span><span className='px-3'>Download App</span>
                            </div></div>
                        <div className='w-full h-full'><div className="bg-white text-black py-2 px-5 text-lg rounded-md flex items-center mb-3 mx-3 hover:mx-0">
                        <span className='bg-white text-yellow-400'><img src={`${assetsUrl}f4.svg`} alt="" /></span><span className='px-3'>HTML</span>
                        </div></div>
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