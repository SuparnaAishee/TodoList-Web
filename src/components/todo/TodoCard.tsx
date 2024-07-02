import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { removeTodo } from "@/redux/features/todoSlice";
export type TTodoCardProps ={
  id:string,
  title:string;
  description:string;
}

const TodoCard=({title,description,id}:TTodoCardProps)=>{
  const dispatch = useAppDispatch();
    return (
      <div className="bg-white rounded-md flex justify-between items-center p-3 border">
        <input type="checkbox" name="" id=""></input>
          <p className="font-semibold">{title}</p>
        {/* <p>Time</p> */}
        <p>{description}</p>
        <div className="space-x-5">
          <Button onClick={()=>dispatch(removeTodo(id))}
          className="bg-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </Button>
          <Button className="bg-[#5C53FE]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </Button>
        </div>
      </div>
    );
};

export default TodoCard;