import { createSlice } from "@reduxjs/toolkit";



 const authInitialState = {
    userAuth: false,
    result: {
      name: "vinayak",
      email: "ovinug@gmail.com",
      dob: "08/10/1997",
    },
  };
 
export const Authreducer = createSlice({
    name:"auth",
    initialState:authInitialState,
    reducers:{
        setUserAuth: (state,action)=>{state.userAuth=action.payload},
        setResult:(state,action)=>{state.result=action.payload}
    }
})
  
export const {setUserAuth,setResult}=Authreducer.actions



