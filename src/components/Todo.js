import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Background = styled.div`
  background: #FFD42E;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  height: 170px;
  width: 250px;
  margin: 25px;
  font-family: Permanent Marker;
  color: black;
  font-size: 32px;
  line-height: 48px;
  text-align: left;
`;

const Todo = ({text}) => {
  // Ensures text does not extend beyond space provided by Post-it:
  let hasTooManyCharacters = false;
  const textLimit = 40;

  if (text.length > textLimit){
    hasTooManyCharacters = true;
  }

  let textToDisplay = text;

  if(hasTooManyCharacters){
    textToDisplay = text.substring(0, textLimit) + "...";
  }

  return(
    <Background>
      <Text>{textToDisplay}</Text>
      <Button/>
    </Background>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo;
