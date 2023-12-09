// import {Fragmennt} from 'react'
import "./Mission.css";
import checkbox from "../../assets/checkbox.webp";
import phone from "../../assets/phone.webp";
import works from "../../assets/works.webp";

export const Mission = () => {
  return (
    <div>
      <div className="container">
        <h5 className="mission-text text-center mt-5">WHY CREDLOCK?</h5>
        <h3 className="hero-p text-center fw-bold mt-3">
          CredLock gives African Financial Institutions the confidence to grow
          their device credit finance portfolios
        </h3>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <p className="fs-5 mt-5">
              CredLock gives Financial Institutions and BNPL organizations the
              capability they need to scale their micro-credit lending
              operations.
            </p>
            <div className="d-flex">
              <img className="checkbox" src={checkbox} alt="checkbox" />
              <span className="side-check">
                Credlock deepens the consumer lending value chain by providing
                capabilities that allow customers to use continued access to
                their mobile phones as collateral for small loans.
              </span>
            </div>
            <div className="d-flex mt-3">
              <img className="checkbox" src={checkbox} alt="checkbox" />
              <span className="side-check">
                Lenders are able to leverage our proprietary smartphone locking
                technology, to incentivize loan repayment through a digital lien
                on continued use of customer’s mobile devices.
              </span>
            </div>
            <div className="d-flex mt-3">
              <img className="checkbox" src={checkbox} alt="checkbox" />
              <span className="side-check">
                We de-risk the practice of micro-lending, enhancing an
                organization’s ability to deploy fully automated loan life
                management lifecycles to include loan-default mitigation.
              </span>
            </div>
            <a href="#">
              <button className="mission-button w-25 mt-3" type="button">
                Contact
              </button>
            </a>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img className="w-100" src={phone} alt="" />
          </div>
        </div>
        <img className="w-100" src={works} alt="" />
      </div>
    </div>
  );
};
