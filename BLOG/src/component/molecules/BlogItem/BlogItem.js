import React from "react";

import { Button, Gap } from "../../atoms";
import "./BlogItem.scss";
import { useNavigate } from "react-router-dom";

const BlogItem = (props) => {
  let navigate = useNavigate();
  const { image, title, name, date, body, id, onDelete } = props;

  return (
    <div className="blog-item">
      <img src={image} alt="post" className="image-thumb" />
      <div className="content-detail">
        <div className="title-wrapper">
          <p className="title">{title}</p>
          <div className="edit-delete-wrapper">
            <p className="edit" onClick={() => navigate(`/create-blog/${id}`)}>
              Edit
            </p>{" "}
            |
            <p className="delete" onClick={() => onDelete(id)}>
              Delete
            </p>
          </div>
        </div>
        <p className="author">
          {name} - {date}
        </p>
        <p className="body">{body}</p>
        <Gap height={20} />
        <Button title="View Detail" onClick={() => navigate(`/detail-blog/${id}`)} />
      </div>
    </div>
  );
};

export default BlogItem;
