import React from "react";
import { RegisterBg } from "../../assets";
import "./DetailBlog.scss";

const DetailBlog = () => {
  return (
    <div className="detail-blog-wrapper">
      <img src={RegisterBg} alt="thumb" className="img-cover" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar eleifend aliquam. Aliquam ut odio sapien. Phasellus tristique ullamcorper tristique. Fusce vel quam nisi. Nulla auctor ligula sed tortor porttitor mattis.
        Sed gravida tortor tellus, ut pulvinar enim euismod eu. Aenean aliquet est nec faucibus lobortis. Donec scelerisque viverra erat id iaculis. Maecenas arcu erat, consectetur sed tellus sit amet, rhoncus convallis ligula. Aliquam
        convallis faucibus libero, in consequat nisi dapibus quis. Cras lacinia feugiat lorem, in congue quam malesuada ornare. Cras consectetur eu turpis ut feugiat. Praesent euismod feugiat elit at egestas. Vestibulum sit amet nisi sed
        tellus semper feugiat.
      </p>
    </div>
  );
};

export default DetailBlog;
