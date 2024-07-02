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
      state.todos.push({ ...action.payload, isCompleted: false });
      // Sort the array to ensure new tasks are before completed tasks
      state.todos.sort((a, b) => {
        if (a.isCompleted === b.isCompleted) {
          return 0;
        }
        return a.isCompleted ? 1 : -1;
      });
    },
    removeTodo:(state,action:PayloadAction<string>)=>{
     state.todos=   state.todos.filter((item)=>item.id !==action.payload);
    },
    toggleComplete:(state,action:PayloadAction<string>)=>{
      const task = state.todos.findIndex((item) => item.id === action.payload);
     
       
      if (task !== -1) {
        // Toggle the completion status of the task
        state.todos[task].isCompleted = !state.todos[task].isCompleted;
 state.todos = state.todos.sort(
   (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
 );
      }
    },
},
})

export const{addTodo,removeTodo,toggleComplete}=todoSlice.actions;
export default todoSlice.reducer;