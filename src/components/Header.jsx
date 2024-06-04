import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function Header() {
 const {userid} = useParams()
 const [data,setData]=useState([])
 const [hanprof,setHandprof]=useState(false)
 useEffect(() => {
  fetchData()
}, [])
console.info(data)
const fetchData = async () => {
  await axios.get('https://6655cb453c1d3b60293b1f2c.mockapi.io/emailsignature/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
}
const profIle =()=>{
  setHandprof(!hanprof)
}
  return (
    <>
     <div className=' w-full px-3 sticky top-0 z-10 bg-white'>
       <div className=' w-full p-2 flex justify-between'>
        <div className="flex w-[103px]">
          <img src="https://www.krishangtechnolab.com/wp-content/uploads/2021/06/kt-logo.svg" alt="img not found" />
        </div>
        <div className='flex'>
          <div>
          {userid ? <Link to='/'><button className='px-3 mx-3 rounded-md border-[1px] py-1 border-black'>Log out</button></Link> : <Link to='/login'><button className='px-3 mx-3 rounded-md border-[1px] py-1 border-black'>Login</button></Link>} 

          </div>
        {/* <Link to='/mysignature'> <button className='px-3 mx-3 rounded-md border-[1px] py-1 border-black'>Show backend</button></Link> */}
       
        <div className='flex flex-col'>
        <button className='mx-3 rounded-full border-2 p-3' onClick={profIle}><svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></button>
       {hanprof && <span className='absolute mt-10 bg-white z-10 p-3 right-1 cursor-pointer'> {data && data.map((ele)=>{
          if(ele.userid===userid){
            return ele.name
          }
        })}</span>}
        </div>

        </div>

       </div>
        
    </div>
    </>
   
  )
}

export default Header