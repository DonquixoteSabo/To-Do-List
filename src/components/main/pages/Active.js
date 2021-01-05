import Item from '../Item';

function Active(props) {
  let todos = props.todos;
  todos = todos.filter(todo => todo.isActive);

  return (
    <ul>
      {todos.map(todo => (
        <Item key={todo.id} task={todo.task} id={todo.id} isActive={true} />
      ))}
    </ul>
  );
}

export default Active;
