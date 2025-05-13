import { configureStore } from "@reduxjs/toolkit";
import {Authreducer} from "./features/authSlice";




export const store = configureStore({
    reducer:{
        Authreducer:Authreducer.reducer
    }
})




