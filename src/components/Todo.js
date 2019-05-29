import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background: #FFD42E;
  height: 250px;
  width: 250px;
  padding: 25px;
  /* text-align does not work if placed directly on span */
  text-align: left;
`;

const Text = styled.span`
  font-family: Permanent Marker;
  color: black;
  font-size: 32px;
  line-height: 48px;
`;

const Todo = () => (
  <Background>
    <Text>This is my first todo. It has many lines so that I can see how it looks.</Text>
  </Background>
);

export default Todo;
