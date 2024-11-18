import { createSlice } from "@reduxjs/toolkit";
import { live_chat_count } from "./constants";

const chatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state, action)=>{
            state.messages.splice(live_chat_count, 1); //here we are removing one message after we are adding 1 message, 
            //this will happen after 10 messages
            state.messages.push(action.payload)
        }
    }
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;