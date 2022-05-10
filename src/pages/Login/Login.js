import React from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../component";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={10} />
        <Input label="Password" placeholder="Password" />
        <Gap height={30} />
        <Button title="Login" onClick={() => navigate("/")} />
        <Gap height={60} />
        <Link title="Belum punya akun ?" onClick={() => navigate("/register")} />
      </div>
    </div>
  );
};

export default Login;
