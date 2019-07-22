import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Text = styled.p`
  font-family: Permanent Marker;
  font-size: 32px;
  line-height: 48px;
`;

const TextDiv = styled.div`
  height: 170px;
  width: 250px;
  margin: 25px;
`;

const DisplayTodo = ({deleteTodo, toggleEditing, id, number, text}) => {
  // Ensures text does not extend beyond space provided by Post-it:
  let hasTooManyCharacters = false;
  const textLimit = 40;

  if (text.length > textLimit) {
    hasTooManyCharacters = true;
  }

  let textToDisplay = `${number}) ${text}`;

  if (hasTooManyCharacters) {
    textToDisplay = textToDisplay.substring(0, textLimit) + "...";
  }

  function handleDoubleClick() {
    toggleEditing();
  }

  return(
    <Fragment>
      <TextDiv onDoubleClick={handleDoubleClick}>
        <Text>{textToDisplay}</Text>
      </TextDiv>
      <Button id={id} onClick={deleteTodo} />
    </Fragment>
  );
};

DisplayTodo.defaultProps = {
  type: "delete"
}

DisplayTodo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default DisplayTodo;
