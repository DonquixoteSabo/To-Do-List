import React, { useState } from 'react';
import Item from '../Item';

const All = props => {
  //It's weird but it has to be here. We need to change State in pages components to re-render list. Without it react-routed won't re-render Item component
  const [changeState, setChangeState] = useState(0);

  const handleChangeState = () => setChangeState(changeState + 1);

  return (
    <ul>
      {props.todos.map(todo => (
        <Item
          handleChangeState={handleChangeState}
          handleCheckboxChange={props.handleCheckboxChange}
          key={todo.id}
          task={todo.task}
          id={todo.id}
          isActive={todo.isActive}
          handleDeleteTask={props.handleDeleteTask}
        />
      ))}
    </ul>
  );
};

export default All;
