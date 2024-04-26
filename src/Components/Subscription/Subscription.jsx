import { useState } from "react";
import "./Subscription.css";

const Subscription = () => {
  const [activeBtn, setActiveBtn] = useState("monthly");
  const [GrowthNumUsers, setGrowthNumber] = useState(5);
  const [StarterNumUsers, setStarterNumber] = useState(1);
  const [CompanyNumUsers, setCompanyNumber] = useState(10);
  return (
    <section className="subscription-section">
      <h2 className="sub-title">
        Built For <br /> <span>High-Performing Teams</span>
      </h2>
      <div className="type">
        <button
          onClick={() => {
            setActiveBtn("monthly");
          }}
          className={`btn ${activeBtn === "monthly" ? "active" : "inactive"}`}
        >
          MONTHLY
        </button>
        <button
          onClick={() => {
            setActiveBtn("yearly");
          }}
          className={`btn ${activeBtn === "yearly" ? "active" : "inactive"}`}
        >
          YEARLY
        </button>
      </div>
      <div className="cards">
        <div className="card">
          <div className="info-part">
            <h2 className="offer-title">STARTER</h2>
            <p className="offer-description">for individuals and small teams</p>
          </div>
          <p className="offer-price">
            <span className="new-price">
              <span className="currency">$</span>35
            </span>
            <div className="per">
              <span>/USER</span>
              <span>/{activeBtn === "monthly" ? "MONTH" : "YEAR"}</span>
            </div>
          </p>
          <p className="billed">
            billed {activeBtn === "monthly" ? "monthly" : "annually"}
          </p>
          <div className="users-num">
            <button
              onClick={() => {
                setStarterNumber(StarterNumUsers - 1);
              }}
              className={`counter ${StarterNumUsers === 1 ? "disabled" : ""}`}
              disabled={StarterNumUsers == 1 ? true : false}
            >
              -
            </button>
            <span className="num-users">
              {StarterNumUsers} {StarterNumUsers == 1 ? "user" : "users"}
            </span>
            <button
              onClick={() => {
                setStarterNumber(StarterNumUsers + 1);
              }}
              className="counter"
            >
              +
            </button>
          </div>
          <button className="other-card-btn">GET STARTED</button>
        </div>
        <div className="card">
          <span className="reduction">33% SAVINGS</span>
          <div className="info-part">
            <h2 className="offer-title">GROWTH</h2>
            <p className="offer-description">
              for growing teams who depend on email
            </p>
          </div>
          <p className="offer-price">
            <span className="old-price">
              <span className="currency">$</span>45
              <span className="barre">/</span>
            </span>
            <span className="new-price">
              <span className="currency">$</span>35
            </span>
            <div className="per">
              <span>/USER</span>
              <span>/{activeBtn === "monthly" ? "MONTH" : "YEAR"}</span>
            </div>
          </p>
          <p className="billed">
            billed {activeBtn === "monthly" ? "monthly" : "annually"}
          </p>
          <div className="users-num">
            <button
              onClick={() => {
                setGrowthNumber(GrowthNumUsers - 1);
              }}
              className={`counter ${GrowthNumUsers === 1 ? "disabled" : ""}`}
              disabled={GrowthNumUsers == 1 ? true : false}
            >
              -
            </button>
            <span className="num-users">
              {GrowthNumUsers} {GrowthNumUsers == 1 ? "user" : "users"}
            </span>
            <button
              onClick={() => {
                setGrowthNumber(GrowthNumUsers + 1);
              }}
              className="counter"
            >
              +
            </button>
          </div>
          <button className="confirm">CONFIRM</button>
        </div>
        <div className="card">
          <div className="info-part">
            <h2 className="offer-title">ENTERPRISE</h2>
            <p className="offer-description">for larger teams</p>
          </div>
          <p className="offer-price">TALK TO SALES FOR PRICING</p>
          <p className="billed">yearly billing only</p>
          <div className="users-num">
            <button
              onClick={() => {
                setCompanyNumber(CompanyNumUsers - 1);
              }}
              className={`counter ${CompanyNumUsers === 1 ? "disabled" : ""}`}
              disabled={CompanyNumUsers == 1 ? true : false}
            >
              -
            </button>
            <span className="num-users">
              {CompanyNumUsers} {CompanyNumUsers == 1 ? "user" : "users"}
            </span>
            <button
              onClick={() => {
                setCompanyNumber(CompanyNumUsers + 1);
              }}
              className="counter"
            >
              +
            </button>
          </div>
          <button className="other-card-btn">TALK TO SALES</button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
