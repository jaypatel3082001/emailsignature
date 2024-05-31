import React, { useState,useEffect } from 'react'
import Tempate from '../Tempate'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setInput, setImg,setBaner } from '../../reduxfiles/slice/Slice';

function BackendContainer() {
    const [actionstate,setActionstate]=useState()
    const [renamestate,setRenamestate]=useState()
    const [tempstate,setTempstate]=useState({
        template: ''
    })
    const dispatch =useDispatch()
    const [data,setData]=useState([])
    const [formdata,setFormdata]=useState()
    const navigator = useNavigate()
    const handleAction = (e)=>{
        const value = e.target.getAttribute('value')
        setActionstate(value)
        console.log(value)
    }
    const renameHand = (e)=>{
         
        setRenamestate(e.target.value)
    }
    const HandelClose = ()=>{
        setRenamestate(null)
    }
    // const hjkLkk = (e)=>{
    //    const {name,value} = e.target
    //    setFormdata(data)
    //    setTempstate({...tempstate,[name]:value})
    // console.log('qqqqqqqqqqqqqq',tempstate)
    // setFormdata({...formdata,template:tempstate.template})

    // }
    const handleChange = (id, e) => {
        const { name, value } = e.target;
            //    setFormdata(data)
            setData((prevFormdata) => 
          prevFormdata.map((item) => 
            item.id === id ? { ...item, [name]: value } : item
          )
        );
      };
    // const handTemp = async (e)=>{
    //     const id = e.target.value
    //     // e.preventDefault()
       
    //    console.log(id)
    // }
    const handTemp = (e)=>{
        e.preventDefault()
       data.map((ele,ind)=>{
            if(e.target.value===ele.id){
                axios.put(`https://6655cb453c1d3b60293b1f2c.mockapi.io/emailsignature/emailtesting/${ele.id}`,ele)
                .then(res => {
                    console.log("Data updated",res)
                    navigator(0)
                })
                .catch(err => console.log(err))
            }
       })
    
    }
    const handleEdit =(e)=>{
        data.map((ele)=>{
            if(ele.id===e.target.value){
                const arr=ele.user
                const userInfoArray = Object.keys(arr).map(key => ({
                    name: key,
                    value: arr[key]
              
                  }));
              
                  userInfoArray.map((ele,i)=>{
                    dispatch(setInput(ele))
                  })
                 
                navigator('/')
                // console.log("aa user 6",ele)
                // console.log("aa user ddf 6",userInfoArray)
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
      console.log(data)

  return (
    <>
     <div className='w-full h-auto bg-[#fe8004] '>
        <div className="h-full w-full bg-yellow-200 p-10 flex  flex-col">
        {data.map((ele,ind)=>{
          return (  <div className="wrap w-[70%] h-full mt-5" key={ind}>
          <div className="head bg-white">
           <span>{ele.template ? ele.template :"Template"}</span>
          <div className=" w-full flex p-3 border-b-[1px] border-gray-300">
              
           </div>
          
          </div>
           <div className="body bg-white w-full p-5">
               <Tempate />
               <div className='flex justify-between'>
           <button className='px-3 mx-3 rounded-md border-[1px] py-1 border-black bg-white mt-5' value={ele.id} onClick={handleEdit} >Edit</button>
           

         
           <button className=' mx-3 rounded-md border-[1px]  border-black bg-white mt-5'><span className='py-1 px-3' value={ele.id} onClick={handleAction}>Action</span> {actionstate==ele.id &&   <div className="absolute mt-3 bg-white p-3">
                 <ul>
                   <li value={ele.id} onClick={renameHand}>Rename</li>
                   <li>Duplicate</li>
                   <li>Delete</li>
                 </ul>
               </div>}</button>
       
          {renamestate==ele.id &&  <div className="absolute w-full h-full opacity-80 bg-black top-0 left-0 z-20">
               <div className="flex justify-center items-center z-30 mt-5">
                   <div className="bg-white z-40 opacity-100 rounded-md px-1 text-black">
                   <h1 className='text-3xl px-3 py-3 border-2 border-b-slate-400 border-t-0 border-l-0 border-r-0  text-black'>Choose Signature Title</h1>
                       <div className='flex flex-col justify-center bg-white px-3 py-3'>
                           <input type="text" className='bg-white border-[1px] border-black py-1' key={ele.id} name='template' value={ele.template} onChange={(e) => handleChange(ele.id, e)}/>
                          
                           <button className='bg-[#1e3a87] rounded-md my-3 py-2' value={ele.id} onClick={handTemp}>Rename signature</button>
                           <button className='bg-white hover:bg-orange-400 rounded-md py-2' onClick={HandelClose}>close</button>

                       </div>
                   </div>


               </div>
           </div>}
           </div>
           </div>
         

       </div>)
        })}
            
        </div>
        
    </div>
    </>
  )
}

export default BackendContainer