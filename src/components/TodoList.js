import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import Todo from './Todo';

const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin:auto;
  max-width: 320px;
  @media only screen and (min-width: 680px) {
    max-width: 640px;
  }
  @media only screen and (min-width: 1000px) {
    max-width: 960px;
  }
`;

;

const TodoList = ({ addTodo, deleteTodo, todos}) => {
  return (
    <Fragment>
      <FlexContainer>
        <Button id="newTodo" onClick={addTodo} type="add"/>
      </FlexContainer>
      <FlexContainer>
        {todos.map(function (todo, index) {
          return (
            <Todo
              deleteTodo={deleteTodo}
              id={String(todo.id)}
              number={String(index+1)}
              key={todo.id}
              text={todo.text}
            />
          );
        })}
      </FlexContainer>
    </Fragment>
  );
};

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
}

export default TodoList;
