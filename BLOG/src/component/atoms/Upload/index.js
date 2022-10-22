import React from "react";
import { LoginBg } from "../../../assets";
import "./upload.scss";

const Upload = ({ img, ...rest }) => {
  return (
    <div className="upload">
      {/* jika img true maka munculkan */}
      {img && <img src={img} className="preview" alt="rusak" />}
      <input type="file" {...rest} />
    </div>
  );
};

export default Upload;
