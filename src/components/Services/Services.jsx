// Services.jsx
import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMoneyCheckAlt, faChartLine, faClock, faFileAlt, faClipboardList, faHandshake, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section className="services-container">
      <h2 className="section-heading">Why Altaneo ?</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon icon1">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Instant Verification and Cash Flow</h2>
            <p className="service-description">Quickly verify your business on the Altaneo platform and receive funds within 24-72 hours*.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon icon2">
            <FontAwesomeIcon icon={faMoneyCheckAlt} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Secure Asset Financing</h2>
            <p className="service-description">Access cash against your company’s outstanding invoices without the need for collateral.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon icon3">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Debt-Free Growth</h2>
            <p className="service-description">Expand your business without taking on additional debt or affecting your balance sheet.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon icon4">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Real-Time Monitoring</h2>
            <p className="service-description">Stay updated on your invoice status anywhere, anytime with Altaneo's self-serve module.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon icon5">
            <FontAwesomeIcon icon={faFileAlt} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Effortless Documentation</h2>
            <p className="service-description">Easily upload your documents and invoices on the Altaneo platform hassle-free.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon icon6">
            <FontAwesomeIcon icon={faClipboardList} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Comprehensive Management</h2>
            <p className="service-description">Enjoy a seamless and transparent process from listing invoices to receiving funds.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon icon7">
            <FontAwesomeIcon icon={faHandshake} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Flexible Repayment Options</h2>
            <p className="service-description">Choose from a variety of repayment plans tailored to your business needs.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon icon8">
            <FontAwesomeIcon icon={faUserFriends} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Expert Financial Guidance</h2>
            <p className="service-description">Receive personalized financial advice and support from our team of experts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
