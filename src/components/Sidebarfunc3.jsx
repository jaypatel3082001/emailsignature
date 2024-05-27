import React, { useState,useEffect,useRef } from 'react'
import { ChromePicker  } from 'react-color'
import { useDispatch, useSelector } from 'react-redux'
import { setColr,setColr2,setPosi1,setPosi2 } from '../reduxfiles/slice/Slice'

function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}
function Sidebarfunc3() {
  const inputs = useSelector((state) => state.inputs);
  const [color, setColor] = useState(inputs.color)
  const [color2, setColor2] = useState(inputs.color2)
  const [hexstate, setHexstate] = useState(rgbToHex(color[0],color[1],color[2]))
  const [hexstate2, setHexstate2] = useState(rgbToHex(color2[0],color2[1],color2[2]))
  const [pointerPosition, setPointerPosition] = useState(inputs.posi1);
  const [pointerPosition2, setPointerPosition2] = useState(inputs.posi2);
  const [shownamecolbtn, setShownamecolbtn] = useState(false);
  const [shownamecolbtn2, setShownamecolbtn2] = useState(false);
  // const [plateBounds, setPlateBounds] = useState(null);
  // const plateRef = useRef(null);
  const dispatch = useDispatch()



    // if (plateRef.current==null) {
    //   const plateRect = plateRef.current.getBoundingClientRect();
    //   setPlateBounds({
    //     minX: plateRect.left,
    //     minY: plateRect.top,
    //     maxX: plateRect.right,
    //     maxY: plateRect.bottom,
    //   });}
    //   console.log('dfjgdgqqqqqqqqqqqq',plateRef);
    // useEffect(() => {
    //   if (plateRef.current) {
    //     const plateRect = plateRef.current.getBoundingClientRect();
    //     setPlateBounds({
    //       minX: plateRect.left,
    //       minY: plateRect.top,
    //       maxX: plateRect.right,
    //       maxY: plateRect.bottom,
    //     });
    //     console.log('jay its ok', plateRect.left);
    //   } 
    // }, []);
  // const handlePlateRef = (ref) => {
  //   plateRef.current = ref;
  // };
  const handleColor = (col,e) => {
    const { clientX, clientY } = e;
    console.log("eval",e)
    console.log("eval",col)
    setHexstate(col.hex)
    // const { clientX, clientY } = event;
    
      setPointerPosition({ x: clientX, y: clientY });
    // }
    const rgbColor = hexToRgb(col.hex);
    setColor(rgbColor)
   console.log("mehds",clientX)
  //  console.log("mehdsfgdff",plateBounds)
    // console.log("postionjhsfdgdfgfhsd",pointerPosition?.x)
    // console.log("qqqqdfgfdgjhsfhsd",e.clientX)
    console.log("jhsfhsd",rgbColor[0])
    console.log("dsgfdjhsfhsd",rgbColor[1])
    console.log("dfhdjhsfhsd",rgbColor[2])
      // setButtonPosition({ x: e.pageX, y: e.pageY });
      // console.log("jay f",buttonPosition)
    // setColor(e.hex)
    dispatch(setColr(color))
    dispatch(setPosi1(pointerPosition))
  }
  const handleColor2 = (col2,e) => {
    console.log("eval",col2)
    setHexstate2(col2.hex)
    const { clientX, clientY } = e;
    setPointerPosition2({ x: clientX, y: clientY });
    
    const rgbColor = hexToRgb(col2.hex);
    setColor2(rgbColor)
    console.log("jhsfhsd",rgbColor[0])
    console.log("dsgfdjhsfhsd",rgbColor[1])
    console.log("dfhdjhsfhsd",rgbColor[2])
      // setButtonPosition({ x: e.pageX, y: e.pageY });
      // console.log("jay f",buttonPosition)
    // setColor(e.hex)
    dispatch(setColr2(color2))
    dispatch(setPosi2(pointerPosition2))
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
    console.log("hekkdsfsdo",e)
   
  };
  const showNamecolor = () =>{
    setShownamecolbtn(!shownamecolbtn)
    console.log(shownamecolbtn)
  }
  const handlePickerxcClick2 = (e) => {
    // Update button position based on click coordinates
  
    // console.log("jay fdgdfgewwqte",buttonPosition)
    console.log("vbcvhekko",e)
   
  };
  const showNamecolor2 = () =>{
    setShownamecolbtn2(!shownamecolbtn2)
    console.log(shownamecolbtn2)
  }
  
  // const handleColorChange = (color, event) => {
  //   // Update the pointer position when the ChromePicker is clicked
    
  // };
 
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
                  <span className="w-10 h-10  rounded-full justify-between" style={{background: `rgb(${color[0]},${color[1]},${color[2]})`}} onClick={showNamecolor}></span>
                </div>
                <div className={`w-full px-5 ${shownamecolbtn===true ? 'block' : 'hidden' }`}>
               
                <div>
                <ChromePicker   disableAlpha  disableHEX={true} color={color} onChange={handleColor} onClick={handlePickerxcClick}   styles={{
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
 <div className={`absolute w-3 h-3 border-2 rounded-full pointer-events-none`}
       style={{left:inputs.posi1.x,
        top:inputs.posi1.y,
       }}
    >
    </div>

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
          #rc-editable-input-7{
            display: none !important;
          }
          #rc-editable-input-8{
            display: none !important;
          }
          }
          #rc-editable-input-41{
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
                  <div className='flex w-full pb-3'><span className='text-3xl font-bold'>#</span> <span className='bg-white text-black px-3 flex w-40 rounded-lg ml-3'><span className=' w-auto flex items-center'>{hexstate2}</span></span></div>
                  <span className="w-10 h-10 rounded-full justify-between" style={{background: `rgb(${color2[0]},${color2[1]},${color2[2]})`}} onClick={showNamecolor2}></span>
                </div>
                <div className={`w-full px-5 ${shownamecolbtn2===true ? 'block' : 'hidden' }`}>
               
                <div >
                <ChromePicker   disableAlpha  disableHEX={true} color={color2} onChange={handleColor2} onClick={handlePickerxcClick2} styles={{
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
             
                <div className={`absolute w-3 h-3 border-2 rounded-full pointer-events-none`}
       style={{left:inputs.posi2.x,
        top:inputs.posi2.y,
       }}
    >
    </div>
                 {/* <style>
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
      </style> */}
                </div>
                 
        
                  <p>Selected Color: {`RGB(${color2[0]},${color2[1]},${color2[2]})`}</p>
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