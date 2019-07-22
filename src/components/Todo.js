import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DisplayTodo from './DisplayTodo';
import EditTodo from './EditTodo';

const Background = styled.div`
  background: #FFD42E;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Todo = ({deleteTodo, id, number, text}) => {
  return(
    <Background>
      {number === "2" ?
        <EditTodo text={text} id={id} /> :
        <DisplayTodo
          deleteTodo={deleteTodo}
          id={id}
          number={number}
          text={text}
        />
      }
    </Background>
  );
};

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
