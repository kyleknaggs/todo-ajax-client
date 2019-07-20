import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Background = ({children}) => <Div>{children}</Div>;

export default Background;
