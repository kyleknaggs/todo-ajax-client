import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

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

const DisplayTodo = ({id, inputText, saveTodo, updateText}) => {
  function handleChange(e){
    const {target: {value}} = e;
    updateText(value);
  }

  return(
    <Fragment>
      <TextDiv>
        <TextArea onChange={handleChange} value={inputText} />
      </TextDiv>
      <Button
        type="save"
        id={id}
        onClick={saveTodo}
        inputText={inputText}
      />
    </Fragment>
  );
};

DisplayTodo.defaultProps = {
  type: "delete"
}

DisplayTodo.propTypes = {
  id: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  saveTodo: PropTypes.func.isRequired,
  updateText: PropTypes.func.isRequired
}

export default DisplayTodo;
