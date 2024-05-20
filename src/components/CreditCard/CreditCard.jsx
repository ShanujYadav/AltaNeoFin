import React from 'react';

import './CreditCard.css'; // Import CSS file for styling
import Touch from '../Touch/Touch';
import Numbers from '../Customerbasenumber/Numbers';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';
import Partner from '../Partners/Partners';

import DualPaneLayout from '../DualPaneLayout/DualPaneLayout';
import CreditCardServicebox from '../Services/CreditCardServicebox';
import Bot from '../Bot/bot';

const CreditCard = () => {
  return (
    
    <div>
    
      <div className='credit-card-container'>
        <Title subTitle='Credit Cards' title='Simplify Your Business Expenses' />

        {/* Card with credit card content */}
        <div className="credit-card-card" id="card1">
          <div className="card-body">
            <h5 className="card-title">At Altaneo, we understand the importance of simplifying business expenses and managing cash flow efficiently. That's why we offer comprehensive corporate credit card solutions tailored to meet the unique needs of your business.</h5>
            <p className="card-text">
              With Altaneo's corporate credit cards, you can enjoy enhanced purchasing power, rewards, and benefits, all while gaining insights and control over your expenses.
            </p>
          </div>
        </div>

        {/* Benefits of Altaneo's Corporate Credit Cards */}
        <div className="credit-card-card" id="card2">
          <div className="card-body">
            <h5 className="card-title">Benefits of Altaneo's Corporate Credit Cards</h5>
            <ul className="card-text">
              <li><strong>Enhanced Purchasing Power:</strong> Altaneo's corporate credit cards provide your business with increased spending flexibility, allowing you to make necessary purchases without liquidity constraints.</li>
              <li><strong>Rewards and Benefits:</strong> Take advantage of rewards programs and benefits tailored to suit your business needs, including cashback, travel rewards, and discounts on business-related expenses.</li>
              <li><strong>Expense Management:</strong> Gain insights and control over your expenses with detailed transaction reporting and expense management tools. Monitor spending patterns, track individual card usage, and streamline expense reimbursement processes.</li>
              <li><strong>Improved Cash Flow:</strong> Altaneo's corporate credit cards help improve cash flow by providing access to revolving credit lines. This enables you to manage short-term cash needs and optimize working capital.</li>
              <li><strong>Security and Fraud Protection:</strong> Protect your business against unauthorized transactions and fraudulent activity with advanced security features, including fraud monitoring, purchase protection, and liability protection.</li>
            </ul>
          </div>
        </div>

      </div>
      {/* <Title subTitle='Introducing Altaneo: Revolutionizing Corporate Spending' title='' />
        
      <DualPaneLayout/> */}
      <CreditCardServicebox/>
      <Title subTitle='Businesses Altaneofied' title='Where are you?' />
        <Partner />
        
        <Title subTitle='Committed Numbers ' title='Satisfied Base Customers' />
        <Numbers />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Touch />
        <Footer />
        <Bot/>
    </div>
  );
};

export default CreditCard;
