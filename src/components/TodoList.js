import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Todo from './Todo';

const FlexContainer = styled.div`
  min-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TodoList= ({todos}) => {
  return (
    <FlexContainer>
      {todos.map(function(todo){
        return (
          <Todo
            key={todo.id}
            text={todo.text}
          />
        );
      })}
    </FlexContainer>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
}

export default TodoList;
