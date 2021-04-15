import React from "react";

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasTodos} onClick={props.handlePick}>
        What should I do today ?
      </button>
    </div>
  );
};

export default Action;
