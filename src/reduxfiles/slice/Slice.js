import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'inputs',
  initialState: {
    fname:'',
    lname:'',
    cname:'',
    dname:'',
    mnum:'',
    emailadd:'',
    weburl:'',
    address:'',
  },
  reducers: {
    setInput: (state, action) => {
      const {name,value}=action.payload;
      state[name]=value
    },
  },
});

export const { setInput } = inputSlice.actions;
export default inputSlice.reducer;
