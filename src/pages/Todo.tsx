
import TodoContainer from '../components/todo/TodoContainer'
import Container from "../components/ui/container"
const Todo=()=>{
    return (
      <Container>
        <h1 className='text-center text-3xl font-semibold'>My Todos</h1>
        <TodoContainer />
      </Container>
    );
};

export default Todo;