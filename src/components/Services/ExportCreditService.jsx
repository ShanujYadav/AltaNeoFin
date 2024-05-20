import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMoneyCheckAlt, faChartLine, faClock, faFileAlt, faClipboardList, faHandshake, faUserFriends,faStar } from '@fortawesome/free-solid-svg-icons';
import './ExportCreditService.css';

const ExportCreditService = () => {
  return (
    <section className="exportcreditservicecontainer">
      <h2 className="section-heading">Why Altaneo?</h2>
      <div className="services-grid">
        {/* Existing service cards */}
        {/* Add your new service cards below */}

        <div className="service-card">
          <div className="service-icon icon9">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Baselining Service Excellence with CSR</h2>
            <p className="service-description">Altaneo's commitment to Corporate Social Responsibility (CSR) extends to every facet of our service offerings. We integrate CSR principles seamlessly into our operations, ensuring that our services uphold the highest standards of ethical business practices, environmental sustainability, and respect for human rights.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon10">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Human-Centric Approach in Service Delivery</h2>
            <p className="service-description">Altaneo adopts a human rights due diligence approach across our service spectrum. We meticulously assess and mitigate risks within our supply chain and operations to ensure that our services, as well as those supported by ECAs, do not compromise human rights.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon11">
            <FontAwesomeIcon icon={faClipboardList} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Setting Service Standards in Alignment with International Norms</h2>
            <p className="service-description">Altaneo aligns its service standards with internationally recognized guidelines such as the OECD Guidelines for Multinational Enterprises and the UN Guiding Principles on Business and Human Rights. Our commitment to these standards sets us apart and resonates with customers seeking partners who share their values.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon12">
            <FontAwesomeIcon icon={faFileAlt} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Transparent Service Offerings</h2>
            <p className="service-description">Altaneo believes in transparency as a cornerstone of service excellence. We provide clear insights into our business practices, including our interactions with ECAs and any public support received, fostering trust and confidence among our customers.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon13">
            <FontAwesomeIcon icon={faHandshake} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Service Leadership in Public Procurement</h2>
            <p className="service-description">Altaneo actively seeks opportunities to showcase our commitment to responsible business conduct in public procurement processes. Our bids emphasize Altaneo's dedication to CSR and adherence to international standards, positioning us as a preferred partner for customers prioritizing ethical service providers.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon14">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Adaptive Service Strategies</h2>
            <p className="service-description">Altaneo remains vigilant about regulatory changes impacting ECA activities, CSR, and human rights. Our adaptive approach ensures compliance with evolving regulations, reaffirming Altaneo's commitment to ethical service delivery.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon15">
            <FontAwesomeIcon icon={faUserFriends} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Collaborative Service Solutions</h2>
            <p className="service-description">Altaneo collaborates closely with ECAs, governmental agencies, and stakeholders to drive responsible business conduct. Through strategic partnerships, we address shared challenges and promote sustainable service solutions, further enhancing our reputation as a responsible service provider.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon icon9">
            {/* Add Altaneo icon */}
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Technology and Innovation Solutions</h2>
            <p className="service-description"> Harness technology and innovation to offer cutting-edge solutions for exporters, including digital trade platforms, blockchain-based supply chain solutions, and AI-powered risk analytics tools to enhance efficiency, transparency, and security in export transactions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportCreditService;
