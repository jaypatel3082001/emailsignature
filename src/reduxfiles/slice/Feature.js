import { createSlice } from '@reduxjs/toolkit';
const  initialState= {
 
  htmlcode:'',
 


}

const inputSlice3 = createSlice({
  name: 'inputs3',
  initialState: initialState,
  reducers: {
    setHtmlcode:(state,action)=>{
      state.htmlcode = action.payload;
    }

    },
  
});

export const { setHtmlcode } = inputSlice3.actions;
export default inputSlice3.reducer;
