import React from "react";
import "./Textarea.scss";

const Textarea = ({ label, ...rest }) => {
  return (
    <div>
      <p className="label">{label}</p>
      <textarea className="text-area" {...rest}></textarea>
    </div>
  );
};

export default Textarea;
