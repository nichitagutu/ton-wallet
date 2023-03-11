import React from "react";

class Alert extends React.Component {
  render() {
    return (
      <div id="alert" className="popup visibility-hidden">
        <div className="popup-title" />
        <div className="popup-black-text" />
        <div className="popup-footer" />
      </div>
    );
  }
}

export default Alert;
