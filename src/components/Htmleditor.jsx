import React, { useState } from 'react'
import Tempate from './Tempate'
import Maincontainer from './Maincontainer';
import { useDispatch, useSelector } from 'react-redux';
import {setHtmlcode} from '../reduxfiles/slice/Feature'
function Htmleditor() {
  const inputs3 = useSelector((state) => state.inputs3);
  const [htmlCode, setHtmlCode] = useState(inputs3.htmlcode);
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    setHtmlCode(event.target.value);
    dispatch(setHtmlcode(htmlCode))
  };

  return (
    <div className='flex'>
      <div className="flex flex-col  h-auto flex-shrink-0 flex-grow-0 w-1/2 pr-10">
        <div className=' border-2 border-slate-300'>
          <textarea
            value={htmlCode}
            onChange={handleInputChange}
            rows={10}
            cols={50}
            className='outline-none w-full h-full focus:border-[#86b7fe] focus:border-2 focus:shadow-lg'
          />
        </div>
      </div>
      <div className='w-full pl-10 '>
        <div className="head bg-[#536697] shadow-lg">
          <div className=" w-full flex p-3 border-b-[1px] border-gray-300">


            <div className="w-full flex flex-col ">

              <h2>Preview</h2>
            </div>
          </div>
          <div className="body bg-white w-full p-5">  <Tempate  />
          </div>
        </div>
      </div>

      {/* <div  /> */}
    </div>
  );
}

export default Htmleditor