import Item from '../Item';

function Completed(props) {
  let todos = props.todos;
  todos = todos.filter(todo => !todo.isActive);

  return (
    <ul>
      {todos.map(todo => (
        <Item key={todo.id} task={todo.task} id={todo.id} isActive={false} />
      ))}
    </ul>
  );
}

export default Completed;
