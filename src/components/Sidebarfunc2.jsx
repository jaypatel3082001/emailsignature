import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setImg, setReset } from '../reduxfiles/slice/Slice'; // Adjust the path to your slice file

function Sidebarfunc2() {
    // const intialdata=[

    //         { fname: "", lname: "", cname: "", dname: "" }

    // ]
    // const [user,setUser]=useState(intialdata)

    const dispatch = useDispatch();
    const inputs = useSelector((state) => state.inputs);
    const [userval,setUserval]=useState(inputs)
    // const [check,setCheck]=useState('false')
    const inuser = inputs.user
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
        const { name, value } = e.target
        dispatch(setInput({ name, value }));
    };
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            dispatch(setImg(reader.result));
        };
    }
    const handleReset = ()=>{
        // setUserval(inputs.user)
        // inuser=userval
        // console.log("fhdf",name)
        // dispatch(setInput(inuser));
        // console.log(inuser)
        // setCheck('true')
    
        dispatch(setReset())
        // console.log(inputs)
     
    }
    
    // console.log(user)

    return (
        <div>
            <h1 className='text-xl font-extrabold pl-3 py-2'>Enter Your Signature Details</h1>

            <div className='w-full  p-3'>
                <div className="p-2 w-full flex flex-col">
                    <button type='reset' onClick={handleReset} className='flex items-center px-5 w-fit hover:text-orange-500'><span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="delete-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="18px" width="18px"><path fill="currentColor" d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg></span> <span className='pl-1'>Clear Fields </span></button>
                    <div className="flex flex-col w-full px-3 py-3"> <label htmlFor="image">Upload Image</label>
                        <input type="file" name='image' placeholder='Upload Image'
                            onChange={handleImageUpload} /></div>
                    <div className="flex flex-col w-full px-3"> <label htmlFor="fname">First Name</label>
                        <input type="text" name='fname' placeholder='john' value={inuser.fname}
                            onChange={handleChange} className='bg-inherit border-b-white border-2 border-l-0 border-t-0 border-r-0 outline-none '/></div>
                    <div className="flex flex-col w-full px-3 py-3">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" name='lname' placeholder='john' value={inuser.lname}
                            onChange={handleChange} className='bg-inherit border-b-white border-2 border-l-0 border-t-0 border-r-0 outline-none '/></div> 
                    <div className="flex flex-col w-full px-3 pb-3"> <label htmlFor="cname">Company Name</label>
                        <input type="text" name='cname' placeholder='john' value={inuser.cname}
                            onChange={handleChange} className='bg-inherit border-b-white border-2 border-l-0 border-t-0 border-r-0 outline-none '/></div>
                    <div className="flex flex-col w-full px-3"> <label htmlFor="dname">Department Name</label>
                        <input type="text" name='dname' placeholder='john' value={inuser.dname}
                            onChange={handleChange} className='bg-inherit border-b-white border-2 border-l-0 border-t-0 border-r-0 outline-none '/></div>
                    <div className="flex flex-col w-full px-3 py-3"> <label htmlFor="mnum">Mobile Number </label>
                        <input type="number" name='mnum' placeholder='john' value={inuser.mnum}
                            onChange={handleChange} className='bg-inherit border-b-white border-2 border-l-0 border-t-0 border-r-0 outline-none '/></div>
                    <div className="flex flex-col w-full px-3">  <label htmlFor="emailadd">Email Address</label>
                        <input type="email" name='emailadd' placeholder='john' value={inuser.emailadd}
                            onChange={handleChange} className='bg-inherit border-b-white border-2 border-l-0 border-t-0 border-r-0 outline-none '/></div>
                    <div className="flex flex-col w-full px-3 py-3"><label htmlFor="weburl">Website URL</label>
                        <input type="text" name='weburl' placeholder='john' value={inuser.weburl}
                            onChange={handleChange} className='bg-inherit border-b-white border-2 border-l-0 border-t-0 border-r-0 outline-none '/></div>
                    <div className="flex flex-col w-full px-3"> <label htmlFor="address">Address</label>
                        <input type="text" name='address' placeholder='john' value={inuser.address}
                            onChange={handleChange} className='bg-inherit border-b-white border-2 border-l-0 border-t-0 border-r-0 outline-none '/></div>

                    <div className="flex flex-col w-full px-3 py-3"> <label htmlFor="insta">Instagram</label>
                        <input type="text" name='insta' placeholder='john' value={inuser.insta}
                            onChange={handleChange} className='bg-inherit border-b-white border-2 border-l-0 border-t-0 border-r-0 outline-none '/></div>
                    <div className="flex flex-col w-full px-3"> <label htmlFor="fb">Facebook</label>
                        <input type="text" name='fb' placeholder='john' value={inuser.fb}
                            onChange={handleChange} className='bg-inherit border-b-white border-2 border-l-0 border-t-0 border-r-0 outline-none '/></div>
                    <div className="flex flex-col w-full px-3"> <label htmlFor="twitter">Twitter</label>
                        <input type="text" name='twitter' placeholder='twitter' value={inuser.twitter}
                            onChange={handleChange} className='bg-inherit border-b-white border-2 border-l-0 border-t-0 border-r-0 outline-none '/></div>
                    <div className="flex flex-col w-full px-3 py-3"> <label htmlFor="linkdin">Linkdin</label>
                        <input type="text" name='linkdin' placeholder='linkdin' value={inuser.linkdin}
                            onChange={handleChange} className='bg-inherit border-b-white border-2 border-l-0 border-t-0 border-r-0 outline-none '/></div>








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

export default Sidebarfunc2;