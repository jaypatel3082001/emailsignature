import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTemp } from '../reduxfiles/slice/Slice';


function Sidebarfunc1() {
  const assetsUrl = import.meta.env.VITE_APP_ASSETS_URL;
  const dispatch = useDispatch()
  const inputs = useSelector((state)=>state.inputs)
  // const tempo = inputs.temps
 
  // const { pelutemp,
  //   bijutemp,
  //   tijutemp,
  //   fifthtemp,
  //   sixthtemp} = inputs.temps

  // const thrtemp='3'
  // const fortemp='4'
  // const fiftemp='5'
  // const sixtemp='6'
  // const [sectemp,setSectemp]=useState(false)
  // const [thrtemp,setThrtemp]=useState(false)
  // const [fortemp,setFortemp]=useState(false)
  // const [fiftemp,setFiftemp]=useState(false)
  // const [sixtemp,setSixtemp]=useState(false)
 let value,name='pelutemp';
  const page1Fun = (e)=>{
    // const {name,value} = e.target
    // console.log(name)
    // const name =e.target.getAttribute('name');
    // setFirtemp(!pelutemp1)
    // console.log(pelutemp1)
    console.log("first",name)
     value = '1'

        dispatch(setTemp( {name,value} ));
    
    
  }
  const page2Fun = (e)=>{
    // const name =e.target.getAttribute('name');
    // setSectemp(!sectemp)
    // setFirtemp(false)
    // setThrtemp(false)
    // setFortemp(false)
    // setFiftemp(false)
    // setSixtemp(false)
    // console.log(sectemp)
    console.log(name)
     value = '2'

        dispatch(setTemp( {name,value} ));

  }
  const page3Fun = (e)=>{
    // const name =e.target.getAttribute('name');
    // setThrtemp(!thrtemp)
    // setFirtemp(false)
    // setSectemp(false)
    // setFortemp(false)
    // setFiftemp(false)
    // setSixtemp(false)
    // console.log(thrtemp)
    console.log(name)
     value = '3'

        dispatch(setTemp( {name,value} ));

  }
  const page4Fun = (e)=>{
    // const name =e.target.getAttribute('name');
    // setFortemp(!fortemp)
    // setFirtemp(false)
    // setThrtemp(false)
    // setSectemp(false)
    // setFiftemp(false)
    // setSixtemp(false)
    // console.log(fortemp)
    console.log(name)
     value = '4'

        dispatch(setTemp( {name,value} ));

  }
  const page5Fun = (e)=>{
    // const name =e.target.getAttribute('name');
    // setFiftemp(!fiftemp)
    // setFirtemp(false)
    // setThrtemp(false)
    // setFortemp(false)
    // setSectemp(false)
    // setSixtemp(false)
    // console.log(fiftemp)
    console.log(name)
     value = '5'

        dispatch(setTemp( {name,value} ));

  }
  const page6Fun = (e)=>{
    // const name =e.target.getAttribute('name');
    // setSixtemp(!sixtemp)
    // setFirtemp(false)
    // setThrtemp(false)
    // setFortemp(false)
    // setFiftemp(false)
    // setSectemp(false)
    // console.log(sixtemp)
    console.log(name)
     value = '6'

        dispatch(setTemp( {name,value} ));

  }
  return (
    <div>
         <h1 className='text-xl font-extrabold pl-3 py-2'>Select Your Template</h1>
                    <p className='flex justify-center my-3 text-lg font-lg'>FREE TEMPLATES</p>
                    <div className='w-full h-full  p-3'>
                        <div className="p-2 w-full">
                            <div className="imagewrap px-3 flex flex-col items-center">
                                <div className="w-52 h-44 bg-black my-5 hover:p-3" >
                                  <div className=" bg-white w-full h-full" name='pelutemp'  onClick={(e)=>page1Fun(e)}><img src={`${assetsUrl}first_template.png`} alt="" /></div>
                                </div>
                                <div className="w-52 h-44 bg-black my-5 hover:p-3" > <div className=" bg-white w-full h-full"  onClick={(e)=>page2Fun(e)}> <img src={`${assetsUrl}second_template.png`} alt="" /> </div></div>
                                <div className="w-52 h-44 bg-black my-5 hover:p-3" > <div className=" bg-white w-full h-full"    onClick={(e)=>page3Fun(e)}></div></div>
                                <div className="w-52 h-44 bg-black my-5 hover:p-3" > <div className=" bg-white w-full h-full"  onClick={(e)=>page4Fun(e)}></div></div>
                                <div className="w-52 h-44 bg-black my-5 hover:p-3" > <div className=" bg-white w-full h-full"   onClick={(e)=>page5Fun(e)}></div></div>
                                <div className="w-52 h-44 bg-black my-5 hover:p-3" > <div className=" bg-white w-full h-full"  onClick={(e)=>page6Fun(e)}></div></div>
                      
                            </div>
                        </div>

                    </div>
    </div>
  )
}

export default Sidebarfunc1