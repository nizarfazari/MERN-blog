import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RegisterBg } from "../../assets";
import "./DetailBlog.scss";

const DetailBlog = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        console.log("success = ", res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("error = ", err);
      });
  }, [id]);
  if (data.author) {
    return (
      <div className="detail-blog-wrapper">
        <img src={RegisterBg} alt="thumb" className="img-cover" />
        <p className="blog-title">{data.title} Blog</p>
        <p className="blog-author">
          {data.author.name} - {data.createdAt}
        </p>
        <p className="blog-body">{data.body}</p>
      </div>
    );
  }
  return <p>Loading data...</p>;
};

export default DetailBlog;
