import React,{useEffect, useState} from 'react'
import Tempate from './Tempate'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Maincontainer() {
   
    
    const inputs = useSelector((state)=>state.inputs)
    const inputs2 = useSelector((state)=>state.inputs2)
    const inputs3 = useSelector((state)=>state.inputs3)
    const [data,setData]=useState([])
    const input = {inputs,inputs2,inputs3}
   const navigator = useNavigate()
    
    const handleSubmit = (e) =>{
         e.preventDefault()
        axios.post('https://6655cb453c1d3b60293b1f2c.mockapi.io/emailsignature/emailtesting',input)
        .then(res => {
            console.log(res)
            navigator('/mysignature')
        })
        .catch(err => console.log(err))
    }
    const handleUpdate =  (e) =>{
       
       data.map((ele)=>{
        if(ele.id==inputs3.userid)
      {
        e.preventDefault()
        axios.put(`https://6655cb453c1d3b60293b1f2c.mockapi.io/emailsignature/emailtesting/${ele.id}`,input)
        .then(res => {
            console.log("Updated user",res)
            navigator('/mysignature')
        })
        .catch(err => console.log(err))
        console.log("aa 6e updated user data",ele)
      }
       })
    }
    useEffect(()=>{
        fetchData()
      },[])
      const fetchData = async()=>{
          await  axios.get('https://6655cb453c1d3b60293b1f2c.mockapi.io/emailsignature/emailtesting')
          .then(res => setData(res.data))
          .catch(err => console.log(err))
      }
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
                    <Tempate />

                </div>
                <div className='flex justify-end'>
              {inputs3.userid ?   <button className='px-3 mx-3 rounded-md border-[1px] py-1 border-black bg-white mt-5' onClick={handleUpdate}>Done Changes</button> :   <button className='px-3 mx-3 rounded-md border-[1px] py-1 border-black bg-white mt-5' onClick={handleSubmit}>Submit</button>}
                </div>

            </div>
            
        </div>
        
    </div>
  )
}

export default Maincontainer