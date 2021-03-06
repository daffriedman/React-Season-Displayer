import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        <h3>{props.message}</h3>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
    message: 'Loading......'
}
export default Spinner;