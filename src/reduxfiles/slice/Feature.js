import { createSlice } from '@reduxjs/toolkit';
const  initialState= {
 
  htmlcode:'',
  userid:'',
 


}

const inputSlice3 = createSlice({
  name: 'inputs3',
  initialState: initialState,
  reducers: {
    setHtmlcode:(state,action)=>{
      state.htmlcode = action.payload;
    },
    setUserid:(state,action)=>{
      state.userid = action.payload;
    },

    },
  
});

export const { setHtmlcode,setUserid } = inputSlice3.actions;
export default inputSlice3.reducer;
