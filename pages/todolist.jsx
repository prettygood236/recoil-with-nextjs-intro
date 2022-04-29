import { useRecoilValue } from 'recoil';
import { todoListState, filteredTodoListState } from '../state/todoListState';
import TodoItemCreator from '../components/TodoItemCreator';
import TodoItem from '../components/TodoItem';
import TodoListFilters from '../components/TodoListFilters';
import TodoListStats from '../components/TodoListStats';

export default function TodoList() {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div className='wrapper'>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}
