import { createSlice } from '@reduxjs/toolkit';
const  initialState= {

  color:[0,0,0],
  color2:[0,0,0],
  posi1:{ x: 0, y: 0 },
  posi2:{ x: 0, y: 0 },
  showcolor1: false,
  showcolor2: false,


}

const inputSlice2 = createSlice({
  name: 'inputs2',
  initialState: initialState,
  reducers: {
  
    setReset2:(state,action)=>{
      return initialState
    },
    setColr:(state,action)=>{
      state.color=action.payload
    },
    setColr2:(state,action)=>{
      state.color2=action.payload
    },
    setPosi1:(state,action)=>{
      state.posi1=action.payload
    },
    setPosi2:(state,action)=>{
      state.posi2=action.payload
    },
    setCopen1:(state,action)=>{
      state.showcolor1=action.payload
    },
    setCopen2:(state,action)=>{
      state.showcolor2=action.payload
    }
    },
  
});

export const { setReset2,setColr,setColr2,setPosi1,setPosi2,setCopen1,setCopen2 } = inputSlice2.actions;
export default inputSlice2.reducer;
