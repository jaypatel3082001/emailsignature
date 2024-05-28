import React, { useState,useEffect,useRef } from 'react'
import { ChromePicker  } from 'react-color'
import { useDispatch, useSelector } from 'react-redux'
import { setColr,setColr2,setPosi1,setPosi2,setCopen1,setCopen2, setReset2   } from '../reduxfiles/slice/Colorslice'

function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}
function Sidebarfunc3() {
  const inputs2 = useSelector((state) => state.inputs2);
  const h1=rgbToHex(inputs2.color[0],inputs2.color[1],inputs2.color[2])
  const h2=rgbToHex(inputs2.color2[0],inputs2.color2[1],inputs2.color2[2])
  const [color, setColor] = useState(inputs2.color)
  const [color2, setColor2] = useState(inputs2.color2)
  // const [hexstate, setHexstate] = useState(h1)
  // const [hexstate2, setHexstate2] = useState(h2)
  const [pointerPosition, setPointerPosition] = useState(inputs2.posi1);
  const [pointerPosition2, setPointerPosition2] = useState(inputs2.posi2);
  const [shownamecolbtn, setShownamecolbtn] = useState(inputs2.showcolor1);
  const [shownamecolbtn2, setShownamecolbtn2] = useState(inputs2.showcolor2);
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
 
    // setHexstate(col.hex)

    const { clientX, clientY } = e;
    // console.log("eval",e)
    // console.log("eval",col)
    
    // const { clientX, clientY } = event;
    
      setPointerPosition({ x: clientX, y: clientY });
    // }
    const rgbColor = hexToRgb(col.hex);
    setColor(rgbColor)
  //  console.log("mehds",clientX)
  //  console.log("mehdsfgdff",plateBounds)
    // console.log("postionjhsfdgdfgfhsd",pointerPosition?.x)
    // console.log("qqqqdfgfdgjhsfhsd",e.clientX)
    // console.log("jhsfhsd",rgbColor[0])
    // console.log("dsgfdjhsfhsd",rgbColor[1])
    // console.log("dfhdjhsfhsd",rgbColor[2])
      // setButtonPosition({ x: e.pageX, y: e.pageY });
      // console.log("jay f",buttonPosition)
    // setColor(e.hex)
    dispatch(setPosi1(pointerPosition))
    dispatch(setColr(color))
  
  }
  const handleColor2 = (col2,e) => {
    // console.log("eval",col2)
    // setHexstate2(col2.hex)
    const { clientX, clientY } = e;
    setPointerPosition2({ x: clientX, y: clientY });
    
    const rgbColor = hexToRgb(col2.hex);
    setColor2(rgbColor)
    // console.log("jhsfhsd",rgbColor[0])
    // console.log("dsgfdjhsfhsd",rgbColor[1])
    // console.log("dfhdjhsfhsd",rgbColor[2])
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
  // const handlePickerxcClick = (e) => {
  //   // Update button position based on click coordinates
  
  //   // console.log("jay fdgdfgewwqte",buttonPosition)
  //   console.log("hekkdsfsdo",e)
   
  // };
  const showNamecolor = () =>{
    setShownamecolbtn(!shownamecolbtn)
    setShownamecolbtn2(false)
    dispatch(setCopen1(shownamecolbtn))
    dispatch(setCopen2(shownamecolbtn2))
    console.log(shownamecolbtn)
  }
  // const handlePickerxcClick2 = (e) => {
  //   // Update button position based on click coordinates
  
  //   // console.log("jay fdgdfgewwqte",buttonPosition)
  //   console.log("vbcvhekko",e)
   
  // };
  const showNamecolor2 = () =>{
    setShownamecolbtn2(!shownamecolbtn2)
    setShownamecolbtn(false)
    dispatch(setCopen2(shownamecolbtn2))
    dispatch(setCopen1(shownamecolbtn))
    console.log(shownamecolbtn2)
  }
  const handleReset = ()=>{


    dispatch(setReset2())
    // console.log(inputs)
 
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
                <button type='reset' onClick={handleReset} className='flex items-center px-5 w-fit hover:text-orange-500'><span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="delete-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="18px" width="18px"><path fill="currentColor" d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg></span> <span className='pl-1'>Clear Fields </span></button>
                  <h3>Color</h3>
                  <p>Select Name Color</p>
                </div>
                <div className="colorwrap">
                <div className="flex justify-between">
                  <div className='flex w-full pb-3'><span className='text-3xl font-bold'>#</span> <span className='bg-white text-black px-3 flex w-40 rounded-lg ml-3'><span className=' w-auto flex items-center'>{h1}</span></span></div>
                  <span className="w-10 h-10  rounded-full justify-between" style={{background: `rgb(${inputs2.color[0]},${inputs2.color[1]},${inputs2.color[2]})`}} onClick={showNamecolor}></span>
                </div>
                <div className={`w-full px-5 ${inputs2.showcolor1 === true ? 'block' : 'hidden' }`}>
               
                <div>
                <ChromePicker   disableAlpha  disableHEX={true} color={color} onChange={handleColor}   styles={{
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
       style={{left:inputs2.posi1.x,
        top:inputs2.posi1.y,
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
          #rc-editable-input-9{
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
                  <div className='flex w-full pb-3'><span className='text-3xl font-bold'>#</span> <span className='bg-white text-black px-3 flex w-40 rounded-lg ml-3'><span className=' w-auto flex items-center'>{h2}</span></span></div>
                  <span className="w-10 h-10 rounded-full justify-between" style={{background: `rgb(${inputs2.color2[0]},${inputs2.color2[1]},${inputs2.color2[2]})`}} onClick={showNamecolor2}></span>
                </div>
                <div className={`w-full px-5 ${inputs2.showcolor2 === true   ? 'block' : 'hidden' }`}>
               
                <div >
                <ChromePicker   disableAlpha  disableHEX={true} color={color2} onChange={handleColor2}  styles={{
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
       style={{left:inputs2.posi2.x,
        top:inputs2.posi2.y,
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