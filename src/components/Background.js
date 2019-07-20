import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  padding-top: 100px;
  background-color: #282c34;
  min-height: 100vh;
  min-width: 100vw;
`;

const Background = ({children}) => <Div>{children}</Div>;

Background.propTypes = {
  children: PropTypes.element.isRequired
}

export default Background;
