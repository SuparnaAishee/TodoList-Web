
import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard, { TTodoCardProps } from "./TodoCard";
import TodoFilter from "./TodoFilter";



 const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        
        
        <AddTodoModal />
       <TodoFilter/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-5  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {
            todos.map((item: TTodoCardProps)=>(<TodoCard {...item}/>))
          }
        </div>

        {/* <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-bold">
          <p >There is No Task Pending</p>
        </div> */}
      </div>
    </div>
  );
};
export default TodoContainer;
