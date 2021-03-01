import React from "react";
import "../styles/Alert.css";
import PropTypes from "prop-types";

const Alert = ({ message, success }) => {
  return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};
Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};
Alert.defaultProps = {
  success: false,
};
export default Alert;
