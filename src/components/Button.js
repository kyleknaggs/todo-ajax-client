import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: ${props => props.type === "add" ? "green" : "red" };
  border: none;
  font-family: Permanent Marker;
  font-size: 32px;
  margin-bottom: 20px;
  margin-left: ${props => props.type === "add" ? "0px" : "20px" };
  padding: 5px 20px;
`

const Button = ({type}) => {
  let text = "x"

  if(type === "add"){
    text = "+";
  }

  return(
    <StyledButton type={type}>{text}</StyledButton>
  );
};

Button.defaultProps = {
  type: ""
}

Button.propTypes = {
  type: PropTypes.string
}

export default Button;
