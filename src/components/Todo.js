import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DisplayTodo from './DisplayTodo';
import EditTodo from './EditTodo';

const Background = styled.div`
  background: #FFD42E;
  margin-right: 20px;
  margin-bottom: 20px;
`;

class Todo extends Component{
  constructor(props){
    super(props);
    const { props: { text } } = this;
    this.state = {
      inputText: text,
      isEditing: false
    }
    // Bind toggleEditing() and updateText() so they can modify state.
    this.toggleEditing = this.toggleEditing.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  toggleEditing(){
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing
    });
  }

  updateText(inputText){
    this.setState({
      inputText: inputText
    });
  }

  render(){
    const {
      toggleEditing,
      updateText,
      props: {deleteTodo, id, number, text},
      state: { isEditing, inputText }
    } = this;

    return (
      <Background>
        {isEditing ?
          <EditTodo id={id} inputText={inputText} updateText={updateText} /> :
          <DisplayTodo
            toggleEditing={toggleEditing}
            deleteTodo={deleteTodo}
            id={id}
            number={number}
            text={text}
          />
        }
      </Background>
    );
  }
}

Todo.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
