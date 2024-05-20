import React from 'react';
import Touch from '../Touch/Touch';
import Numbers from '../Customerbasenumber/Numbers';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';
import Partner from '../Partners/Partners';
import './ExportCredits.css';
import ExportCreditService from '../Services/ExportCreditService';
import Bot from '../Bot/bot';


const ExportCredits = () => {
  return (
    <div>
      <div className='container'>
        <Title subTitle='Why Altaneo For Export Credits' title='We Offer Wide Ranges' />

        {/* Card with hover effect */}
        <div className="card" id="card1">
          <div className="card-body">
            <h5 className="card-title">Altaneo's Comprehensive Export Credit Solutions</h5>
            <p className="card-text">
              At Altaneo, we understand the pivotal role of smooth international trade transactions in propelling your business forward. That's why we offer comprehensive export credit solutions designed to accelerate your trade operations, whether you're a manufacturer, exporter, or trader. With Altaneo's flexible financing options, you can access the necessary capital to finance both pre-shipment and post-shipment activities, ensuring timely delivery and fulfillment of orders, no matter where your business takes you.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="card" id="card2">
          <div className="card-body">
            <h5 className="card-title">Pre-Shipment Financing</h5>
            <p className="card-text">
              Altaneo provides tailored financing solutions to support your pre-shipment activities, enabling you to procure raw materials, manufacture goods, and prepare shipments without liquidity constraints. Our customizable credit facilities offer competitive rates and flexible terms, empowering you to optimize your supply chain and meet production deadlines seamlessly.
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="card" id="card3">
          <div className="card-body">
            <h5 className="card-title">Post-Shipment Financing</h5>
            <p className="card-text">
              Once your goods are ready for export, Altaneo offers post-shipment financing solutions to bridge the gap between shipment and payment receipt. Whether you require working capital to cover shipping costs, insurance premiums, or other trade-related expenses, our financing options are designed to align with your cash flow needs, ensuring smooth operations and minimizing payment delays.
            </p>
          </div>
        </div>



        {/* Fifth Card */}
        <div className="card" id="card5">
          <div className="card-body">
            <h5 className="card-title">Partner with Altaneo Today</h5>
            <p className="card-text">
              Partner with Altaneo today and unlock the full potential of your international trade operations. With our export credit solutions, you can navigate the complexities of global commerce with ease, driving growth, and prosperity for your business.
            </p>
          </div>
        </div>
        {/* Fourth Card */}
        <div className="card" id="card4">
          <div className="card-body">
            <h5 className="card-title">Benefits of Altaneo's Export Credits</h5>
            <ul className="card-text">
              <li>Timely Delivery: Access to flexible financing ensures timely procurement, production, and shipment of goods, helping you meet customer demands and maintain a competitive edge in the global market.</li>
              <li>Enhanced Cash Flow: Altaneo's export credits optimize your cash flow by providing liquidity when you need it most, allowing you to seize new business opportunities and expand your international footprint with confidence.</li>
              <li>Mitigated Risks: Our comprehensive credit solutions help mitigate risks associated with international trade, including currency fluctuations, payment delays, and political uncertainties, safeguarding your business against unforeseen challenges.</li>
              <li>Tailored Support: Altaneo works closely with you to understand your unique business requirements and tailor financing solutions that align with your objectives, ensuring maximum flexibility and value-added support throughout the trade cycle.</li>
            </ul>
          </div>
        </div>

        <Title subTitle='Businesses Altaneofied' title='Where are you?' />
        <Partner />
        <ExportCreditService />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Touch />
        <Bot />
      </div>
      <Footer />
    </div>
  );
};

export default ExportCredits;
