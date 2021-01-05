import Item from '../Item';

const All = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Item
          key={todo.id}
          task={todo.task}
          id={todo.id}
          isActive={todo.isActive}
        />
      ))}
    </ul>
  );
};

export default All;
