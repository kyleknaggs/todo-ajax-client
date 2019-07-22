import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: ${props => props.type === "add" ? "#00C851" : "#FF4444" };
  border: none;
  cursor: pointer;
  font-family: Permanent Marker;
  font-size: 32px;
  margin-bottom: 20px;
  margin-left: ${props => props.type === "add" ? "0px" : "20px" };
  padding: 5px 20px;
  :hover{
    background: ${props => props.type === "add" ? "#007E33" : "#CC0000" };
  }
`

const Button = ({id, onClick, type}) => {
  let text = "x"

  if(type === "add"){
    text = "+";
  }

  function handleClick(e){
    if(type==="add"){
      onClick();
    }else{
      // Pass id if purpose of click is to delete a todo
      onClick(id);
    }
  }

  return(
    <StyledButton onClick={handleClick} type={type}>{text}</StyledButton>
  );
};

Button.defaultProps = {
  type: ""
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
}

export default Button;
