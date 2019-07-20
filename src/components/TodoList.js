import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList= ({todos}) => {
  return (
    <Fragment>
      {todos.map(function(todo){
        return (
          <Todo
            key={todo.id}
            text={todo.text}
          />
        );
      })}
    </Fragment>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
}

export default TodoList;
