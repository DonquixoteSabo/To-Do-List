import React, { useState } from 'react';
import Item from '../Item';

function Completed(props) {
  let todos = props.todos;
  todos = todos.filter(todo => !todo.isActive);

  //It's weird but it has to be here. We need to change State in pages components to re-render list. Without it react-routed won't re-render Item component
  const [changeState, setChangeState] = useState(0);

  const handleChangeState = () => setChangeState(changeState + 1);

  return (
    <>
      <ul>
        {todos.map(todo => (
          <Item
            key={todo.id}
            task={todo.task}
            id={todo.id}
            isActive={false}
            handleCheckboxChange={props.handleCheckboxChange}
            handleChangeState={handleChangeState}
            handleDeleteTask={props.handleDeleteTask}
          />
        ))}
        <li>
          <button
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 64,
              backgroundColor: '#EB5757',
              border: 'none',
              color: 'white',
              borderRadius: 4,
              padding: '10px 20px',
            }}
            onClick={props.handleDeleteAll}
          >
            delete all
          </button>
        </li>
      </ul>
    </>
  );
}

export default Completed;
