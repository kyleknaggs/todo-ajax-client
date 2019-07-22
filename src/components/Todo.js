import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Background = styled.div`
  background: #FFD42E;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-family: Permanent Marker;
  font-size: 32px;
  line-height: 48px;
`;

const Div = styled.div`
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
`;

const Todo = ({deleteTodo, id, number, text}) => {
  // Ensures text does not extend beyond space provided by Post-it:
  let hasTooManyCharacters = false;
  const textLimit = 40;

  if (text.length > textLimit){
    hasTooManyCharacters = true;
  }

  let textToDisplay = `${number}) ${text}`;

  if(hasTooManyCharacters){
    textToDisplay = textToDisplay.substring(0, textLimit) + "...";
  }

  return(
    <Background>
      <Div>
        {number === "2" ?
          <TextArea value={textToDisplay} /> :
          <Text>{textToDisplay}</Text>
        }
      </Div>
      <Button id={id} onClick={deleteTodo} />
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
