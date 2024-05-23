import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'inputs',
  initialState: {
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
     
    }

  },
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
    }
  },
});

export const { setInput, setImg, setTemp } = inputSlice.actions;
export default inputSlice.reducer;
