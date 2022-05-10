import React from "react";
import { Button, Gap, Input, Link, Textarea, Upload } from "../../component";
import "./CreateBlog.scss";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  let navigate = useNavigate();
  return (
    <div className="blogpost">
      <Link className="kembali" title="kembali" onClick={() => navigate("/")} />
      <p className="title">Create New Blog Post</p>
      <Input />
      <Upload />
      <Textarea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
    </div>
  );
};

export default CreateBlog;
