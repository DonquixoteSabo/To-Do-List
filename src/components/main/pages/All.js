import Item from '../Item';

const All = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <Item
          handleCheckboxChange={props.handleCheckboxChange}
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
