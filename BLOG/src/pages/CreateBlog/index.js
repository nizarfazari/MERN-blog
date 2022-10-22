import { Button, Gap, Input, Link, Textarea, Upload } from "../../component";
import "./CreateBlog.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postToApi, setForm, setImgPreview, updateToApi } from "../../config/Redux/action";
import { useEffect, useState } from "react";
import Axios from "axios";

const CreateBlog = () => {
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body, image } = form;
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isUpdate, setIsUpdate] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsUpdate(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
        })
        .catch((err) => {
          console.log("err = ", err);
        });
    }
    if (isUpdate == false) {
      dispatch(setForm("title", ""));
      dispatch(setForm("body", ""));
      dispatch(setImgPreview(null));
    }
  }, [id, dispatch]);

  const onsubmit = () => {
    if (isUpdate) {
      updateToApi(form, id);
      console.log("form pada on sumbut update", form);
    } else {
      postToApi(form);
      console.log("form pada on sumbut", form);
    }
  };

  const onImageUpload = (file) => {
    //untuk pengiriman ke api
    // setImage(file);
    dispatch(setForm("image", file));
    // setImgPreview(URL.createObjectURL(file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  return (
    <div className="blogpost">
      <Link className="kembali" title="kembali" onClick={() => navigate("/")} />
      <p className="title">{isUpdate ? "Update" : "Create"} New Blog Post</p>
      <Input label="Title" onChange={(e) => dispatch(setForm("title", e.target.value))} value={title} />
      <Upload onChange={(e) => onImageUpload(e.target.files[0])} img={imgPreview} />
      <Textarea label={"Body"} onChange={(e) => dispatch(setForm("body", e.target.value))} value={body} />
      <Gap height={10} />
      <div className="button-action">
        <Button title={isUpdate ? "Update" : "Simpan"} onClick={onsubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;
