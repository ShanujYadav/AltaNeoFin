import React from 'react';
import './VendorFinancing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMoneyCheckAlt, faChartLine, faClock, faFileAlt, faClipboardList, faHandshake, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const VendorServices = () => {
  return (
    <section className="vendor-services-container">
      <h2 className="vendor-section-heading">Why Altaneo ?</h2>
      <div className="vendor-services-grid">
        <div className="vendor-service-card">
          <div className="vendor-service-icon icon1">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="vendor-service-content">
            <h2 className="vendor-service-title">Flexible Financing Solutions</h2>
            <p className="vendor-service-description">Vendor financing offers flexible funding options tailored to meet your business needs, ensuring you have access to the capital required for growth without the constraints of traditional lending.</p>
          </div>
        </div>
        <div className="vendor-service-card">
          <div className="vendor-service-icon icon2">
            <FontAwesomeIcon icon={faMoneyCheckAlt} />
          </div>
          <div className="vendor-service-content">
            <h2 className="vendor-service-title">Streamlined Process</h2>
            <p className="vendor-service-description">Our vendor financing solutions streamline the financing process, allowing you to quickly access the funds needed to purchase goods or services from trusted vendors, keeping your operations running smoothly.</p>
          </div>
        </div>
        <div className="vendor-service-card">
          <div className="vendor-service-icon icon3">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <div className="vendor-service-content">
            <h2 className="vendor-service-title">Enhanced Cash Flow</h2>
            <p className="vendor-service-description">By leveraging vendor financing, you can optimize your cash flow management, ensuring you have the liquidity needed to seize new opportunities, invest in expansion, and navigate market fluctuations with confidence.</p>
          </div>
        </div>
        <div className="vendor-service-card">
          <div className="vendor-service-icon icon4">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="vendor-service-content">
            <h2 className="vendor-service-title">Build Strong Vendor Relationships</h2>
            <p className="vendor-service-description">Vendor financing strengthens your relationships with suppliers by demonstrating your commitment to timely payments and fostering trust. This, in turn, can lead to preferential pricing, priority access to inventory, and enhanced collaboration opportunities.</p>
          </div>
        </div>
        <div className="vendor-service-card">
          <div className="vendor-service-icon icon5">
            <FontAwesomeIcon icon={faFileAlt} />
          </div>
          <div className="vendor-service-content">
            <h2 className="vendor-service-title">Manage Seasonal Demands</h2>
            <p className="vendor-service-description">Vendor financing is especially beneficial for businesses with seasonal demand fluctuations. It provides the flexibility to procure inventory or services when needed most, without straining your working capital during slower periods.</p>
          </div>
        </div>
        <div className="vendor-service-card">
          <div className="vendor-service-icon icon6">
            <FontAwesomeIcon icon={faClipboardList} />
          </div>
          <div className="vendor-service-content">
            <h2 className="vendor-service-title">Competitive Advantage</h2>
            <p className="vendor-service-description">Embracing vendor financing gives your business a competitive edge by enabling you to respond quickly to market demands, capitalize on growth opportunities, and maintain agility in a dynamic business environment.</p>
          </div>
        </div>
        <div className="vendor-service-card">
          <div className="vendor-service-icon icon7">
            <FontAwesomeIcon icon={faHandshake} />
          </div>
          <div className="vendor-service-content">
            <h2 className="vendor-service-title">Flexible Repayment Options</h2>
            <p className="vendor-service-description">Choose from a variety of repayment plans tailored to your business needs.</p>
          </div>
        </div>
        <div className="vendor-service-card">
          <div className="vendor-service-icon icon8">
            <FontAwesomeIcon icon={faUserFriends} />
          </div>
          <div className="vendor-service-content">
            <h2 className="vendor-service-title">Expert Financial Guidance</h2>
            <p className="vendor-service-description">Receive personalized financial advice and support from our team of experts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorServices;
