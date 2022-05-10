import React from "react";
import { Facebook, Instagram, Twitter } from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img src={img} alt="icon" className="icon-medsos" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img src={Twitter} className="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={Twitter} />
          <Icon img={Facebook} />
          <Icon img={Instagram} />
        </div>
      </div>
      <div className="copywrite">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
