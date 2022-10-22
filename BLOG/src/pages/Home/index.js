import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../component";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../../config/Redux/action";
import Axios from "axios";

const Home = () => {
  //react hook
  // const [datablog, setDataBlog] = useState([]);
  const [counter, SetCounter] = useState(1);

  const { datablogs, page } = useSelector((state) => state.homeReducer);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const previous = () => {
    SetCounter(counter <= 1 ? 1 : counter - 1);
    console.log(counter);
  };

  const next = () => {
    SetCounter(counter === page.total_page ? page.total_page : counter + 1);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Apakah anda yakin ingin menghapusnya",
      buttons: [
        {
          label: "Ya",
          onClick: () => {
            Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
              .then((res) => {
                console.log("succes delete data = ", res.data);
                dispatch(setDataBlog(counter));
              })
              .catch((err) => {
                console.log("err = ", err);
              });
          },
        },
        {
          label: "Tidak",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="create blog" onClick={() => navigate("/create-blog/")} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {datablogs.map((blog) => {
          return <BlogItem key={blog._id} image={`http://localhost:4000/${blog.image}`} title={blog.title} body={blog.body} date={blog.createdAt} name={blog.author.name} id={blog._id} onDelete={confirmDelete} />;
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-pagination">
          {page.current_page} / {page.total_page}
        </p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
