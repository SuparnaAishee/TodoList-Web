import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type TTdo={
    id:string,
    title:string,
    description:string,
    isCompleted?:boolean
};

type TInitialState={
    todos:TTdo[];
}

const initialState:TInitialState={
    todos:[]};
const todoSlice=createSlice({
    name:"todo",
initialState,
reducers:{
    addTodo:(state,action:PayloadAction<TTdo>)=>{
state.todos.push({...action.payload,isCompleted:false});
    },
    removeTodo:(state,action:PayloadAction<string>)=>{
     state.todos=   state.todos.filter((item)=>item.id !==action.payload);
    }
},
})

export const{addTodo,removeTodo}=todoSlice.actions;
export default todoSlice.reducer;