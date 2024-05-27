import React, { useEffect, useState } from 'react'
// import {imgsrc} from '../assets'
// import instasv from '../assets/p1.jpg'

function Tempate(props) {
    const assetsUrl = import.meta.env.VITE_APP_ASSETS_URL;
    const inputs = props.inputVVlu
    const inuser = inputs.user
    const { pelutemp } = inputs.temps
    let acol=inputs?.color
    let acol2=inputs?.color2
    let ab =parseInt(acol[0])
    let abh = parseInt(acol[1])
    let abk = parseInt(acol[2])
    let ab2 =parseInt(acol2[0])
    let abh2 = parseInt(acol2[1])
    let abk2 = parseInt(acol2[2])
   
    // console.log("2ndeeeeeeefghfgj",ab2)
    // console.log("2ndeeeeeeefghfgj",abh2)
    // console.log("2ndeeeeeeefghfgj",abk2)
    console.log("2ndeeeeeeefghfgj",acol2)
    // console.log("refh",inputs.color)
    //  a1 = false, a2 = false, a3 = "false", a4 = "false", a5 = "false", a6 = "false";
    
    //  let  a1 = pelutemp,
    //      a2 = bijutemp,
    //      a3 = tijutemp,
    //      a4 = forthtemp,
    //      a5 = fifthtemp,
    //      a6 = sixthtemp;
    
    // console.log("a1=",a1)
    // console.log("a2=",a2)
    // console.log("a3=",a3)
    // console.log("a4=",a4)
    // console.log("a5=",a5)
    // console.log("a6=",a6)

    return (
        <>
            <div className='flex w-full justify-center'>
                <div className="h-72">
                    <div className="flex w-auto">
                        <div className={`image border-r-blue-400 border-[1px] border-t-0 border-l-0 border-b-0 ${pelutemp=='1' && " border-r-blue-400"} ${pelutemp=='2' && "border-r-0"}`}>
                            <div className='imgwrap h-28 w-28  pr-3'>{inputs.image ? <img src={inputs.image} alt="Uploaded" /> : <img src={`${assetsUrl}p1.jpg`} alt="" />}</div>

                            <ul className={`flex pt-3 pr-2 ${pelutemp=='1' && "bg-white"} ${pelutemp=='2' && "custom-template1"} ${pelutemp=='3' && "bg-blue-600"} ${pelutemp=='4' && "bg-slate-600"} ${pelutemp=='5' && "bg-yellow-600"} ${pelutemp=='6' && "bg-red-600"} `}>
                               
                            {inuser.insta && <li className={`mx-1 p-1 rounded-full  text-white ${pelutemp=='1' && " bg-gradient-to-r from-red-450 via-red-450 to-red-450"} ${pelutemp=='2' && "bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500"}`}><a href={`https://www.facebook.com/${inuser.insta}`} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 448 512"><path fill="currentcolor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a></li>}

                                {inuser.fb && <li className={`mx-1 p-1 rounded-full bg-[#3b5998] text-white ${pelutemp=='1' && "bg-[#fe5860]"} ${pelutemp=='2' && "bg-orange-500"}`}><a href={`https://www.facebook.com/${inuser.fb}`} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 512 512"><path fill="currentcolor" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg></a></li>}
                                {inuser.twitter && <li className={`bg-[#00acee] text-white mx-1 p-1 rounded-full ${pelutemp=='1' && "bg-[#fe5860]"} ${pelutemp=='2' && "bg-orange-500"}`}><a href={`https://www.twitter.com/${inuser.twitter}`} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 512 512"><path fill="currentcolor" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg></a></li>}
                                {inuser.linkdin && <li className={`mx-1 p-1 rounded-full bg-[#0a66c2] text-white ${pelutemp=='1' && "bg-[#fe5860]"} ${pelutemp=='2' && "bg-orange-500"}`}><a href={`https://www.linkedin.com/${inuser.linkdin}`} target='_blank'><svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 448 512"><path fill="currentcolor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg></a></li>}



                            </ul>
                        </div>
                        <div className="info w-auto">

                            <div className={`flex flex-col px-5 ${pelutemp=='2' && " px-0 py-3"}`}>
                                <div className={`flex font-bold text-lg `} style={{color:`rgb(${ab},${abh},${abk})`}}>
                                    <span className={`w-auto pr-3`}  value={inuser.fname}>{inuser.fname}</span>
                                    <span className='w-auto' value={inuser.lname}>{inuser.lname}</span>
                                </div>
                                <div className='flex' style={{color:`rgb(${ab2},${abh2},${abk2})`}}>
                                    <span className='w-auto pr-3 border-r-blue-400 border-[1px] border-t-0 border-l-0 border-b-0 outline-none' value={inuser.cname}>{inuser.cname}</span>
                                    <span className='w-auto px-3' value={inuser.dname}>{inuser.dname}</span>


                                </div>
                                <div className="fexl flex-col" style={{color:`rgb(${ab2},${abh2},${abk2})`}}>
                                    <span>{inuser.mnum && <a href={`tel:${inuser.mnum}`} value={inuser.mnum} className='flex items-center cursor-pointer'><span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="14px" width="14px"><path fill="#ff0000" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg></span>{inuser.mnum}</a>}</span>
                                    <span className='flex'>{inuser.emailadd && <a href={`mailto:${inuser.emailadd}`} value={inuser.emailadd} className='flex items-center cursor-pointer'><span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="14px" width="14px"><path fill="#f50f0f" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg></span>{inuser.emailadd}</a>}</span>

                                    <span>{inuser.weburl && <a href={`//:${inuser.weburl}`} value={inuser.weburl} className='flex items-center cursor-pointer'><span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="14px" width="14px"><path fill="#ff1900" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg></span>{inuser.weburl}</a>}</span>
                                    <span>{inuser.address && <a href={`https://www.google.com/maps/search/${inuser.address}`} target='_blank' value={inuser.address} className='flex items-center cursor-pointer'><span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="14px" width="14px"><path fill="#ff0000" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg></span>{inuser.address}</a>}</span>

                                </div>

                            </div>
                            <div className={`${pelutemp=='1' && "hidden"} ${pelutemp=='2' && "flex"}`}>
                                <div className= {`bannerwraper pt-3 pr-5 w-full`}>
                                {inputs.banner ?  <img src={inputs.banner} alt="" className={`w-full h-[80px] border-none`} /> : <img src={`${assetsUrl}banner1.jpeg`} alt="" className={`w-full h-[80px] border-none`} />}
                                </div>
                              </div>

                        </div>
                    </div>
                    <div className={`flex ${pelutemp=='2' && "hidden"}`}>
                        <div className= {`bannerwraper pt-3 pr-5 w-full`}>
                           {inputs.banner ?  <img src={inputs.banner} alt="" className={`w-full h-[80px] border-none`} /> : <img src={`${assetsUrl}banner1.jpeg`} alt="" className={`w-full h-[80px] border-none`} />}
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Tempate