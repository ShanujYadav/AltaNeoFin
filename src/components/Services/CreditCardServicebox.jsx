import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMoneyCheckAlt, faChartLine, faClock, faFileAlt, faClipboardList, faHandshake, faUserFriends, faStar } from '@fortawesome/free-solid-svg-icons';
import './CreditCardServicebox.css';

const CreditCardServicebox = () => {
  return (
    <section className="creditcardservicebox">
      <h2 className="section-heading">Say goodbye to paperwork and unnecessary expenses. Altaneo seamlessly integrates with your card program, empowering you to issue encrypted virtual cards effortlessly. Experience the freedom to purchase without worry—welcome to Altaneo</h2>
<p></p>
      <a href="#" className="discover-link"></a>

      <div className="services-grid">
        {/* New service cards */}
        <div className="service-card">
          <div className="service-icon icon1">
            <FontAwesomeIcon icon={faMoneyCheckAlt} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Secure, Single-Use Cards</h2>
            <p className="service-description">Empower your team with virtual cards for specific purchases within seconds. With Altaneo, every transaction is virtual, ensuring maximum security.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon2">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Pre-Approval Every Step</h2>
            <p className="service-description">Unlike conventional corporate cards, Altaneo requires pre-approval for every transaction. Rest easy knowing that a virtual corporate credit card is only issued with your consent.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon3">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Streamlined Management</h2>
            <p className="service-description">Access all approved transactions in one convenient location. Altaneo simplifies your financial records, providing a clear overview without the complexity.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon4">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Simplified Request Process</h2>
            <p className="service-description">Altaneo eliminates the need for employees to be cardholders on your commercial credit card account. Simply log in, enter purchase details, and watch as Altaneo swiftly processes your request for a virtual corporate credit card.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon5">
            <FontAwesomeIcon icon={faUserFriends} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Team-Focused Approach</h2>
            <p className="service-description">Altaneo puts approval directly in the hands of budget owners, expediting the purchasing process. Once a manager approves a request, Altaneo issues a virtual corporate credit card for immediate use.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon6">
            <FontAwesomeIcon icon={faClipboardList} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Seamless Reconciliation</h2>
            <p className="service-description">Approved purchase requests in Altaneo come pre-coded with business justifications and accounting codes, streamlining your accounting process. Say goodbye to tedious reconciliation tasks.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon7">
            <FontAwesomeIcon icon={faHandshake} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Eliminate Tail-Spend Challenges</h2>
            <p className="service-description">Altaneo doesn't just address tail spend—it illuminates it. With Altaneo, obscure credit card charges and post-purchase expense reports become a thing of the past. Say yes to efficient enterprise spend management.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon icon8">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="service-content">
            <h2 className="service-title">First Advantage Transforms with Altaneo</h2>
            <p className="service-description">Discover how First Advantage embraced Altaneo in their critical operations, achieving: Secured millions in spend, Pre-approval for every virtual card issued, Complete visibility into transactions.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon icon8">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Choose a Bank Partner for the Card Program</h2>
            <p className="service-description">Select from a range of trusted bank partners like AMEX, Bank of America, and others for Altaneo's Virtual Card program with Coupa Pay.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon icon8">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="service-content">
            <h2 className="service-title">Boost Adoption and Maximize Spending with Altaneo Virtual Cards</h2>
            <p className="service-description">Boost bank rebates by encouraging more supplier and employee adoption. Altaneo's user-friendly interface and automated processes eliminate the need for expense reports, incentivizing greater card usage."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardServicebox;
