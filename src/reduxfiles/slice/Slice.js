import { createSlice } from '@reduxjs/toolkit';
const  initialState= {
  user: {
    fname: '',
    lname: '',
    cname: '',
    dname: '',
    mnum: '',
    emailadd: '',
    weburl: '',
    address: '',
    insta: '',
    fb: '',
    twitter: '',
    linkdin: '',
  },
  image: null,
  temps:{
    pelutemp: '1'
   
  },
  banner:null,
  color:[0,0,0],

}

const inputSlice = createSlice({
  name: 'inputs',
  initialState: initialState,
  reducers: {
    setInput: (state, action) => {
      const { name, value } = action.payload;
      state.user[name] = value;
    },
    setImg:(state,action)=>{
      state.image = action.payload;
    },
    setTemp:(state,action)=>{
      const { name, value } = action.payload;
      state.temps[name] = value;
    },
    setBaner:(state,action)=>{
      state.banner = action.payload;
    },
    setReset:(state,action)=>{
      return initialState
    },
    setColr:(state,action)=>{
      state.color=action.payload
    }
  },
});

export const { setInput, setImg, setTemp, setBaner,setReset,setColr } = inputSlice.actions;
export default inputSlice.reducer;
