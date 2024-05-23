import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTemp } from '../reduxfiles/slice/Slice';


function Sidebarfunc1() {
  const dispatch = useDispatch()
  const inputs = useSelector((state)=>state.inputs)
  // const tempo = inputs.temps
  const pelutemp1 = '1'
  // const { pelutemp,
  //   bijutemp,
  //   tijutemp,
  //   fifthtemp,
  //   sixthtemp} = inputs.temps
  const sectemp='2'
  const thrtemp='3'
  const fortemp='4'
  const fiftemp='5'
  const sixtemp='6'
  // const [sectemp,setSectemp]=useState(false)
  // const [thrtemp,setThrtemp]=useState(false)
  // const [fortemp,setFortemp]=useState(false)
  // const [fiftemp,setFiftemp]=useState(false)
  // const [sixtemp,setSixtemp]=useState(false)

  const page1Fun = (e)=>{
    // const {name,value} = e.target
    // console.log(name)
    const name =e.target.getAttribute('name');
    // setFirtemp(!pelutemp1)
    // console.log(pelutemp1)
    console.log(name)
    const value = pelutemp1

        dispatch(setTemp( {name,value} ));
    
    
  }
  const page2Fun = (e)=>{
    const name =e.target.getAttribute('name');
    // setSectemp(!sectemp)
    // setFirtemp(false)
    // setThrtemp(false)
    // setFortemp(false)
    // setFiftemp(false)
    // setSixtemp(false)
    // console.log(sectemp)
    console.log(name)
    const value = sectemp

        dispatch(setTemp( {name,value} ));

  }
  const page3Fun = (e)=>{
    const name =e.target.getAttribute('name');
    // setThrtemp(!thrtemp)
    // setFirtemp(false)
    // setSectemp(false)
    // setFortemp(false)
    // setFiftemp(false)
    // setSixtemp(false)
    // console.log(thrtemp)
    console.log(name)
    const value = thrtemp

        dispatch(setTemp( {name,value} ));

  }
  const page4Fun = (e)=>{
    const name =e.target.getAttribute('name');
    // setFortemp(!fortemp)
    // setFirtemp(false)
    // setThrtemp(false)
    // setSectemp(false)
    // setFiftemp(false)
    // setSixtemp(false)
    // console.log(fortemp)
    console.log(name)
    const value = fortemp

        dispatch(setTemp( {name,value} ));

  }
  const page5Fun = (e)=>{
    const name =e.target.getAttribute('name');
    // setFiftemp(!fiftemp)
    // setFirtemp(false)
    // setThrtemp(false)
    // setFortemp(false)
    // setSectemp(false)
    // setSixtemp(false)
    // console.log(fiftemp)
    console.log(name)
    const value = fiftemp

        dispatch(setTemp( {name,value} ));

  }
  const page6Fun = (e)=>{
    const name =e.target.getAttribute('name');
    // setSixtemp(!sixtemp)
    // setFirtemp(false)
    // setThrtemp(false)
    // setFortemp(false)
    // setFiftemp(false)
    // setSectemp(false)
    // console.log(sixtemp)
    console.log(name)
    const value = sixtemp

        dispatch(setTemp( {name,value} ));

  }
  return (
    <div>
         <h1 className='text-xl font-extrabold pl-3 py-2'>Select Your Template</h1>
                    <p className='flex justify-center my-3 text-lg font-lg'>FREE TEMPLATES</p>
                    <div className='w-full h-full bg-red-400 p-3'>
                        <div className="p-2 w-full">
                            <div className="imagewrap px-3 flex flex-col items-center">
                                <div className="w-52 h-44 bg-black my-5 hover:p-3" >
                                  <div className=" bg-white w-full h-full" name='pelutemp' value={pelutemp1} onClick={(e)=>page1Fun(e)}></div>
                                </div>
                                <div className="w-52 h-44 bg-black my-5 hover:p-3" > <div className=" bg-white w-full h-full" name='pelutemp' value={sectemp}  onClick={(e)=>page2Fun(e)}></div></div>
                                <div className="w-52 h-44 bg-black my-5 hover:p-3" > <div className=" bg-white w-full h-full" name='pelutemp' value={thrtemp}  onClick={(e)=>page3Fun(e)}></div></div>
                                <div className="w-52 h-44 bg-black my-5 hover:p-3" > <div className=" bg-white w-full h-full" name='pelutemp' value={fortemp}  onClick={(e)=>page4Fun(e)}></div></div>
                                <div className="w-52 h-44 bg-black my-5 hover:p-3" > <div className=" bg-white w-full h-full" name='pelutemp' value={fiftemp}  onClick={(e)=>page5Fun(e)}></div></div>
                                <div className="w-52 h-44 bg-black my-5 hover:p-3" > <div className=" bg-white w-full h-full" name='pelutemp' value={sixtemp}  onClick={(e)=>page6Fun(e)}></div></div>
                      
                            </div>
                        </div>

                    </div>
    </div>
  )
}

export default Sidebarfunc1