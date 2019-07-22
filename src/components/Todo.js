import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DisplayTodo from './DisplayTodo';
import Button from './Button';

const Background = styled.div`
  background: #FFD42E;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const TextDiv = styled.div`
  height: 170px;
  width: 250px;
  margin: 25px;
`;

const TextArea = styled.textarea`
  border: none;
  font-family: Permanent Marker;
  font-size: 32px;
  line-height: 48px;
  padding: 0px;
  width: 250px;
  height: 170px;
`;

const Todo = ({deleteTodo, id, number, text}) => {
  function saveTodo(){
    console.log("Save todo.")
  }

  const editTodo = (
    <Fragment>
      <TextDiv>
        <TextArea value={text} />
      </TextDiv>
      <Button type="save" id={id} onClick={saveTodo} />
    </Fragment>
  );

  return(
    <Background>
      {number === "2" ?
        editTodo :
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
