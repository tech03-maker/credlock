import "./Hero.css";
import feature from "../../assets/features.webp";
import istock from "../../assets/istockphoto-1342235356-612x612.jpg"
import group from "../../assets/group.webp";
import play from "../../assets/play.webp";

export const Hero = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="hero-text col-12 col-sm-12 col-md-6 col-lg-6">
            <h1>Africa’s leading Device Financing Risk Management Platform</h1>
            <p className="mt-3">
              A digital micro-credit default mitigation platform designed to
              provide financial Institutions the capability to mitigate loan
              defaults on micro-loans in the device financing and micro-credit
              space.
            </p>

            <div className="hero-buttons row">
              <div className="col-6">
                <button type="button">Contact us</button>
              </div>
              <div className="col-6">
                <img src={play} alt="" />
                <small>How it works</small>
              </div>
            </div>
            <p className="mt-3">
              OVER 10k +{" "}
              <a className="link" href="#">
                REVIEWS
              </a>
            </p>
            <img src={group} alt="" />
          </div>
          <div className="container sided-hero col-12 col-sm-12 col-md-6 col-lg-6">
          <img className="sideImg" src={istock} alt="" />
          <img className="top w-100" src={feature} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
