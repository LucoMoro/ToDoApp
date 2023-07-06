//components
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

export default function Home () {
    return (
        <>
            <Header/>
            <TodoForm/>
            <Todos/>
        </>
    );
}