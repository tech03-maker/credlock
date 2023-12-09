import React from "react";
import "./Explore.css";
import wallet from "../../assets/wallet.webp";
import finance from "../../assets/finance.webp";

export const Explore = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-4">
            <h3 className="explore-h3">Explore Credlock Features</h3>
            <p className="explore-p mt-3">
              Credlock provides an additional layer of fully automatable risk
              management framework, improving substantially the quality of
              device loan portfolios
            </p>
            <button className="mission-button w-25 mt-3" type="button">
              Contact
            </button>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 purple mt-3">
            <h3 className="explore-h3 text-white fs-4 fw-light">
              Highly Customizable
            </h3>
            <p className="explore-p fs-5 fw-light text-white mt-3">
              Integrate device enrollment, locking and unlocking. capabilities
              seamlessly into your internal device credit management systems
            </p>
            <img className="wallet w-75" src={wallet} alt="" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 pink">
            <h3 className="explore-h3 text-white fs-4 fw-light">
              Pay As You Use
            </h3>
            <p className="explore-p fs-5 fw-light text-white mt-3">
              No upfront or integration fees, Pay only when you book a device
              loan.
            </p>
            <img className="wallet w-75 flex-end" src={finance} alt="finance" />
          </div>

          <div className="end-explore col-12 col-sm-12 col-md-6 col-lg-6 mt-4">
            <h3 className="explore-h3">Explore Credlock Features</h3>
            <p className="explore-p mt-3">
              Credlock provides an additional layer of fully automatable risk
              management framework, improving substantially the quality of
              device loan portfolios
            </p>
            <button className="mission-button w-25 mt-3" type="button">
              Contact
            </button>
          </div>
        </div>
        <div className="end-lg-explore mt-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h3 className="explore-h3 fw-light">
                Credit Financing the smart way
              </h3>
              <p className="explore-p mt-3">
                Credlock provides an additional layer of fully automatable risk
                management framework, improving substantially the quality of
                device loan portfolios
              </p>
            </div>
            <form className="explore-form col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
              <input
                className="w-100 input p-3"
                type="email"
                placeholder="Your Email"
                required
              />
              <button className="submit w-100 mt-3" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
