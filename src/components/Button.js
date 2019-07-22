import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: ${props => props.bg.color};
  border: none;
  cursor: pointer;
  font-family: Permanent Marker;
  font-size: 32px;
  margin-bottom: 20px;
  margin-left: ${props => props.text === "+" ? "0px" : "20px"};
  padding: 5px 20px;
  :hover{
    background: ${props => props.bg.hoverColor};
  }
`

const Button = ({id, inputText, onClick, type}) => {
  let text = "x"
  let bg = {
    color: "#FF4444",
    hoverColor: "#CC0000"
  }

  if(type === "add"){
    text = "+";
    bg = {
      color: "#00C851",
      hoverColor: "#007E33"
    }
  }

  if(type === "save"){
    text = "Save";
    bg = {
      color: "#33b5e5",
      hoverColor: "#0099CC"
    }
  }

  function handleClick(e){
    if(type==="add"){
      onClick();
    }else if(type==="delete"){
      onClick(id);
    }else{
      onClick(id, inputText);
    }
  }

  return(
    <StyledButton bg={bg} onClick={handleClick} text={text}>{text}</StyledButton>
  );
};

Button.defaultProps = {
  inputText: "",
  type: "delete"
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  inputText: PropTypes.string,
  type: PropTypes.string
}

export default Button;
