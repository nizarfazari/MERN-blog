import React from "react";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../component";
import { useNavigate } from "react-router-dom";
import "./register.scss";

const Register = () => {
  let navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Fullname" placeholder="Full Name" />
        <Gap height={10} />
        <Input label="Email" placeholder="Email" />
        <Gap height={10} />
        <Input label="Password" placeholder="Password" />
        <Gap height={30} />
        <Button title="Register" onClick={() => navigate("/login")} />
        <Gap height={60} />
        <Link title="Kembali ke Login" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default Register;
