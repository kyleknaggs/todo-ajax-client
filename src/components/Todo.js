import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Background = styled.div`
  background: #FFD42E;
  margin-left: 10px;
  margin-right: 10px;
`;

const Text = styled.p`
  height: 250px;
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

  if(text.length > 72){
    hasTooManyCharacters = true;
  }

  let textToDisplay = text;

  if(hasTooManyCharacters){
    textToDisplay = text.substring(0,72) + "...";
  }

  return(
    <Background>
      <Text>{textToDisplay}</Text>
    </Background>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo;
