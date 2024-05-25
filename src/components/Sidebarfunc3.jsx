import React, { useState } from 'react'
import { ChromePicker  } from 'react-color'
import { useDispatch } from 'react-redux'
import { setColr } from '../reduxfiles/slice/Slice'

function Sidebarfunc3() {
  const [color, setColor] = useState([0,0,0])
  const [hexstate, setHexstate] = useState(`#000000`)
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [shownamecolbtn, setShownamecolbtn] = useState(false);
  const dispatch = useDispatch()
  const handleColor = (e) => {
    console.log("eval",e)
    setHexstate(e.hex)
    
    const rgbColor = hexToRgb(e.hex);
    setColor(rgbColor)
    console.log("jhsfhsd",rgbColor[0])
    console.log("dsgfdjhsfhsd",rgbColor[1])
    console.log("dfhdjhsfhsd",rgbColor[2])
      // setButtonPosition({ x: e.pageX, y: e.pageY });
      // console.log("jay f",buttonPosition)
    // setColor(e.hex)
    dispatch(setColr(color))
  }
  const hexToRgb=(hex)=> {
    hex = hex.replace(/^#/, '');
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return [r, g, b];
  }
  const handlePickerxcClick = (e) => {
    // Update button position based on click coordinates
  
    // console.log("jay fdgdfgewwqte",buttonPosition)
    console.log("hekko",e)
   
  };
  const showNamecolor = () =>{
    setShownamecolbtn(!shownamecolbtn)
    console.log(shownamecolbtn)
  }
 
  return (
    <>
      <div>
        <h1 className='text-xl font-extrabold pl-3 py-2'>Select Your Template</h1>
        <p className='flex justify-center my-3 text-lg font-lg'>FREE TEMPLATES</p>
        <div className='w-full h-full  p-3'>
          <div className="p-2 w-full">
            <div className="imagewrap px-3">
              <div className=" justify-center w-auto ">
                <div className="flex flex-col py-3">
                  <h3>Color</h3>
                  <p>Select Name Color</p>
                </div>
                <div className="colorwrap">
                <div className="flex justify-between">
                  <div className='flex w-full pb-3'><span className='text-3xl font-bold'>#</span> <span className='bg-white text-black px-3 flex w-40 rounded-lg ml-3'><span className=' w-auto flex items-center'>{hexstate}</span></span></div>
                  <span className="w-10 h-10 bg-white rounded-full justify-between" onClick={showNamecolor}></span>
                </div>
                <div className={`w-full px-5 ${shownamecolbtn===true ? 'block' : 'hidden' }`}>
               
                <div >
                <ChromePicker   disableAlpha  disableHEX={true} color={color} onChange={handleColor} onClick={handlePickerxcClick} styles={{
                  default: {
                    picker: {
                      boxShadow: 'none', 
                      padding:'0px',
                      borderRadius:'10px',
                      background:'none',
                      cursor: 'crosshair',
                      
                      // Example style: remove the box shadow
                    },
                    hue: {
                      display:'block !important',
                      marginTop:'5px',
                      width: '100%',
                      borderRadius:'50%',
                    }, 
                    body:{
                      padding:'0',
                    }
                
                  },
                
                }} />
                <button className={`absolute top-[${buttonPosition.y}] left-[${buttonPosition.x}] w-2 h-2 bg-white`}></button>
                 <style>
        {` 
        .hue-horizontal{
          border-radius: 10px
        }
          #rc-editable-input-1{
            display: none !important;
          }
          #rc-editable-input-2{
            display: none !important;
          }
          #rc-editable-input-3{
            display: none !important;
          }
          #rc-editable-input-4{
            display: none !important;
          }
          #rc-editable-input-5{
            display: none !important;
          }
          #rc-editable-input-6{
            display: none !important;
          }
          .chrome-picker div svg{
            display: none !important;
          }
          .chrome-picker div label{
            display: none !important;
          }
           .saturation-black{
            height:100%;
           }
           .flexbox-fix{
            display: none;
           }
        `}
      </style>
                </div>
                 
                  {/* <div className="absolute" on></div> */}
                  <p>Selected Color: {`RGB(${color[0]},${color[1]},${color[2]})`}</p>
                  </div>
                </div>
                <div className="colorwrap">
                <div className="flex justify-between">
                  <div className='flex w-full pb-3'><span className='text-3xl font-bold'>#</span> <span className='bg-white text-black px-3 flex w-40 rounded-lg ml-3'><span className=' w-auto flex items-center'>{hexstate}</span></span></div>
                  <span className="w-10 h-10 bg-white rounded-full justify-between" onClick={showDetailscolor}></span>
                </div>
                <div className={`w-full px-5 ${shownamecolbtn===true ? 'block' : 'hidden' }`}>
               
                <div >
                <ChromePicker   disableAlpha  disableHEX={true} color={color} onChange={handleColor} onClick={handlePickerxcClick} styles={{
                  default: {
                    picker: {
                      boxShadow: 'none', 
                      padding:'0px',
                      borderRadius:'10px',
                      background:'none',
                      cursor: 'crosshair',
                      
                      // Example style: remove the box shadow
                    },
                    hue: {
                      display:'block !important',
                      marginTop:'5px',
                      width: '100%',
                      borderRadius:'50%',
                    }, 
                    body:{
                      padding:'0',
                    }
                
                  },
                
                }} />
                <button className={`absolute top-[${buttonPosition.y}] left-[${buttonPosition.x}] w-2 h-2 bg-white`}></button>
                 <style>
        {` 
        .hue-horizontal{
          border-radius: 10px
        }
          #rc-editable-input-1{
            display: none !important;
          }
          #rc-editable-input-2{
            display: none !important;
          }
          #rc-editable-input-3{
            display: none !important;
          }
          #rc-editable-input-4{
            display: none !important;
          }
          #rc-editable-input-5{
            display: none !important;
          }
          #rc-editable-input-6{
            display: none !important;
          }
          .chrome-picker div svg{
            display: none !important;
          }
          .chrome-picker div label{
            display: none !important;
          }
           .saturation-black{
            height:100%;
           }
           .flexbox-fix{
            display: none;
           }
        `}
      </style>
                </div>
                 
                  {/* <div className="absolute" on></div> */}
                  <p>Selected Color: {`RGB(${color[0]},${color[1]},${color[2]})`}</p>
                  </div>
                </div>
               

              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Sidebarfunc3