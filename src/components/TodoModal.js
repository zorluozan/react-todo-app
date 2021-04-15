import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const TodoModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedTodo}
      contentLabel="Selected Todo"
      onRequestClose={props.handleClearSelectedTodo}
      closeTimeoutMS={200}
    >
      <h3>Selected Option</h3>
      {props.selectedTodo && <p>{props.selectedTodo}</p>}
      <button onClick={props.handleClearSelectedTodo}>Okay</button>
    </Modal>
  );
};

export default TodoModal;
