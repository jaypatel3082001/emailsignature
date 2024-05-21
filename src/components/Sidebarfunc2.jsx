import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setInput } from '../reduxfiles/slice/Slice'; // Adjust the path to your slice file

function Sidebarfunc2() {
    // const intialdata=[
      
    //         { fname: "", lname: "", cname: "", dname: "" }
  
    // ]
    // const [user,setUser]=useState(intialdata)
    // const [userval,setUserval]=useState([])
    const dispatch = useDispatch();
    const inputs = useSelector((state) => state.inputs);
    // const inputdata=(e)=>{
    //     // setUser()

    //     const name = e.target.name
    //     const value = e.target.value
    //     // setUser([...user, { [name]: value }]);
    //     setUser(user => ([ ...user,
    //         {[name]: value}]
           
    //     ));

    //     // if(user==!null){     
    //     //     setUserval(user)
    //     // }
      
    // }
    const handleChange = (e) => {
        const {name,value} = e.target
        dispatch(setInput( {name,value} ));
      };
    
    // console.log(user)
    
  return (
    <div>
         <h1 className='text-xl font-extrabold pl-3 py-2'>Select Your Template</h1>
           
                    <div className='w-full h-full bg-red-400 text-black p-3'>
                        <div className="p-2 w-full">
                            <div className="flex flex-col"> <label htmlFor="fname">First Name</label>
                            <input type="text" name='fname' placeholder='john'   value={inputs.fname}
        onChange={handleChange}/></div>
                            <div className="flex flex-col">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" name='lname' placeholder='john'  value={inputs.lname}
        onChange={handleChange}/></div>
                            <div className="flex flex-col"> <label htmlFor="cname">Company Name</label>
                            <input type="text" name='cname' placeholder='john'   value={inputs.cname}
        onChange={handleChange}/></div>
                            <div className="flex flex-col"> <label htmlFor="dname">Department Name</label>
                            <input type="text" name='dname' placeholder='john'   value={inputs.dname}
        onChange={handleChange}/></div>
                            <div className="flex flex-col"> <label htmlFor="mnum">Mobile Number </label>
                            <input type="number" name='mnum' placeholder='john'   value={inputs.mnum}
        onChange={handleChange}/></div>
                            <div className="flex flex-col">  <label htmlFor="emailadd">Email Address</label>
                            <input type="email" name='emailadd' placeholder='john'   value={inputs.emailadd}
        onChange={handleChange}/></div>
                            <div className="flex flex-col"><label htmlFor="weburl">Website URL</label>
                            <input type="text" name='weburl' placeholder='john'   value={inputs.weburl}
        onChange={handleChange}/></div>
                            <div className="flex flex-col"> <label htmlFor="address">Address</label>
                            <input type="text" name='address' placeholder='john'   value={inputs.address}
        onChange={handleChange}/></div>
                           
                           
                           
                           
                           
                          
         
                           
                        </div>

                        {/* <table className='bg-white text-black'>
                            <tbody className='flex'>    
                                {
                                
                                
                                user.map((ele,i)=>{
                                    
                                    
                                    let d;
                                    let inl=0,jnl=0,dnl=0,knl=0;
                                 
                                     if(ele.fname)
                                        {
                                            d=1;
                                            // inl=inl+1;
                                            console.log(inl)
                                            console.log(ele.fname)
                                            console.log(ele.fname.length)
                                        }else if(ele.lname){
                                            d=2;
                                            console.log(ele.lname)
                                        }else if(ele.cname){
                                            d=3;
                                            console.log(ele.cname)
                                        }else if(ele.dname){
                                            d=4;
                                        }else{
                                            d=0;
                                        }

                                            switch (d) {
                                                case 0:
                                                   
                                                    break;
                                                case 1:
        
                                                      return (<>
                                                      <tr key={i}>
                                                
                                                <td>{ele.fname[ele.fname.length-1]}</td>
                                            
                                            </tr>
                                            </>
                                                    
                                                    );
                                                    
  
                                                    break;
                                                case 2:
                                                    // jnl++
                                                   
                                                // console.log(inl)
                                                    return (
                                                        <tr key={i} className='bg-green-600 text-green-100'>
                                                    
                                                            <td>{ele.lname[ele.lname.length-1]}</td>
                                                        
                                                        </tr>
                                                        );
                                                        
                                                    
                                                    break;
                                                case 3:
                                                    // dnl++
                                                
                                                    return (
                                                        <tr key={i} className='bg-black text-white'>
                                                    
                                                            <td>{ele.cname[ele.cname.length-1]}</td>
                                                        
                                                        </tr>
                                                        );
                                                    
                                                    break;
                                                case 4:
                                                        // knl++
                                                    return (
                                                        <tr key={i} className='bg-red-600 text-white'>
                                                    
                                                            <td>{ele.dname[ele.dname.length-1]}</td>
                                                        
                                                        </tr>
                                                        );
                                                    
                                                    break;
                
                                            }
                                  
                                    
                                })}
                                
                            </tbody>
                        </table> */}

                    </div>
    </div>
  )
}

export default Sidebarfunc2