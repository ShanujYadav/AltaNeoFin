import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Title from '../Title/Title';
import './RefundPolicy.css';
import Bot from '../Bot/bot';


const RefundPolicy = () => {
  return (
    <div>
      
      <Navbar />
      <div className="refund-policy-container">
        <div className="refund-policy-card">
          <Title subTitle="Refund Policy" title="" />
        </div>
        <div className="refund-policy-card">
          <h2>For Charge Back Transactions:</h2>
          <div className="card-body">
            <p>
              1.1 In these Terms and Conditions, "Charge Back" refers to approved and settled credit
              card or net banking purchase transactions that are at any time refused, debited, or
              charged back to the merchant account (including similar debits to Payment Service
              Provider's accounts, if applicable) by the acquiring bank or credit card company,
              along with associated bank fees, penalties, and charges.
            </p>
            <p>
              1.2 If a User intends to claim a chargeback for any reason, they must promptly notify
              Altaneo. Any refunds will be processed by Altaneo through the payment gateway or
              other appropriate means as deemed fit by Altaneo. Users are not entitled to make
              refund or chargeback claims directly to the Payment Service Provider(s), and such
              claims will not be entertained.
            </p>
          </div>
        </div>
        <div className="refund-policy-card">
          <h2>Refund for Fraudulent/Duplicate Transactions:</h2>
          <div className="card-body">
            <p>
              2.1 Users should contact Altaneo regarding any fraudulent transactions resulting from
              the misuse of card/bank details by fraudulent individuals or parties. Altaneo will
              address such issues in accordance with its policies and rules.
            </p>
          </div>
        </div>
        <div className="refund-policy-card">
          <h2>Server Slow Down/Session Timeout:</h2>
          <div className="card-body">
            <p>
              3.1 If the Website or Payment Service Provider’s webpage experiences server-related
              issues such as slowdowns, failures, or session timeouts, Users should take the
              following actions:
            </p>
            <ul>
              <li>
                If the bank account has been debited, Users must refrain from making a duplicate
                payment and immediately contact Altaneo to confirm payment.
              </li>
              <li>If the bank account has not been debited, Users may initiate a new transaction for payment.</li>
            </ul>
            <p>
              Users acknowledge that Payment Service Provider(s) shall not be held responsible for
              fraudulent or duplicate transactions, and no claims should be made directly to them.
              Communication regarding such matters received by Payment Service Provider(s) will not
              be entertained.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Bot/>
    </div>
  );
};

export default RefundPolicy;
