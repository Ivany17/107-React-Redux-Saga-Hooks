import Counter from 'components/Counter';
import TaskForm from 'components/TaskForm';
import ToDoList from 'components/ToDoList';
import UserForm from 'components/UserForm';
import UsersList from 'components/UsersList';

function App(props) {
  return (
    <div>
      <UserForm />
      <UsersList />
      <hr />
      <Counter />
      <hr />
      <TaskForm />
      <hr />
      <ToDoList />
    </div>
  );
}

export default App;