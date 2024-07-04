import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Solutions from './components/Solutions/Solutions';
import Testimonials from './components/Testimonials/Testimonials';
import Touch from './components/ContectUs/ContectUs';
import Footer from './components/Footer/Footer';
import Partners from './components/Partners/Partners';
import Team from './components/Team/Team';
import Investors from './components/Investors/Investors';
import Login from './components/Login/login';
import Privacypolicy from './components/others/PrivacyPolicy/Privacypolicy';
import RefundPolicy from './components/Refund/RefundPolicy';
import Terms from './components/others/Terms/Terms';
import Bot from './components/Bot/bot';
import Blogs from './components/Blogs/Blogs';
import TeamPage from './components/Team/TeamPage';
import Admin from './components/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Faqs from './components/faq\'s/Faqs'
import Dashboard from './components/Dashboard/Dashboard';
import SiCalculator from './components/calculator/SiCalculator';
import InvoiceDiscountingPage from './components/products/invoiceDiscounting/InvoiceDiscountingPage';
import VendorFinancingPage from './components/products/vendorFinancing/VendorFinancingPage';
import ExportCreditPage from './components/products/exportCredit/ExportCreditPage';
import CreditCardPage from './components/products/creditCard/CreditCardPage';
import SupplyChainFinanceBlog from './components/Blogs/blogPages/SupplyChainFinanceBlog';
import InvoiceDiscountingBlog from './components/Blogs/blogPages/InvoiceDiscountingBlog';
import FutureOfSCFBlog from './components/Blogs/blogPages/FutureOfSCFBlog';
import MachineLearningBlog from './components/Blogs/blogPages/MachineLearningBlog';
import WorkingCapitalBlog from './components/Blogs/blogPages/WorkingCapitalBlog';
import BlockChainTechBlog from './components/Blogs/blogPages/BlockChainTechBlog';
import DynamicDiscountingBlog from './components/Blogs/blogPages/DynamicDiscountingBlog';
import InventoryManagementBlog from './components/Blogs/blogPages/InventoryManagementBlog';
import CreditRiskAssessmentBlog from './components/Blogs/blogPages/CreditRiskAssessmentBlog';
import ContectUs from './components/ContectUs/ContectUs';


const App = () => {

  return (
    <Router>
      <Switch>
        {/* Routes for pages without Navbar */}
        <Route path={['/login', '/register']} component={Login} />
        {/* <Route path='/Dashboard' component={Dashboard} /> */}
        <Route path="/dashboard/*" render={Dashboard} />

        <Route path={['/admin']} component={Admin} />

        {/* Routes for pages with Navbar */}
        <Route>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path='/products/invoiceDiscounting' component={InvoiceDiscountingPage} />
            <Route exact path='/products/vendorFinancing' component={VendorFinancingPage} />
            <Route exact path='/products/exportCredits' component={ExportCreditPage} />
            <Route exact path='/products/creditCard' component={CreditCardPage} />

            <Route exact path='/blogs' component={Blogs} />
            <Route exact path='/blogs/supplyChainFinance' component={SupplyChainFinanceBlog} />
            <Route exact path='/blogs/invoiceDiscounting' component={InvoiceDiscountingBlog} />
            <Route exact path='/blogs/futureOfSupplyChain' component={FutureOfSCFBlog} />
            <Route exact path='/blogs/machineLearning' component={MachineLearningBlog} />
            <Route exact path='/blogs/workingCapital' component={WorkingCapitalBlog} />
            <Route exact path='/blogs/blockChainTechnology' component={BlockChainTechBlog} />
            <Route exact path='/blogs/dynamicDiscounting' component={DynamicDiscountingBlog} />
            <Route exact path='/blogs/inventoryManagement' component={InventoryManagementBlog} />
            <Route exact path='/blogs/creditRiskAssessment' component={CreditRiskAssessmentBlog} />


            <Route exact path="/simple-intrest-caclucator" component={SiCalculator} />
            <Route exact path='/privacyPolicy' component={Privacypolicy} />
            <Route exact path='/Refundpolicy' component={RefundPolicy} />
            <Route exact path='/Terms' component={Terms} />
            {/* <Route exact path='/blog/:id' component={subBlog} /> */}
            <Route exact path='/TeamPage' component={TeamPage} />
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

const Home = () => {
  const Title = ({ subTitle, title }) => {
    return (
      <div className='text-center my-5 text-2xl font-semibold'>
        <h2 className='text-blue-800 font'>{subTitle}</h2> {/* Change color as needed */}
        <h1 className='text-black mt-2 text-3xl font-bold'>{title}</h1>     {/* Change color as needed */}
      </div>
    );
  };

  return (<>
    <Hero />
    <div className=''>
      <Title subTitle='' title='' />
      <Solutions />
      <About />
      <Title subTitle='Valued From leading brands' title='Leading Investors' />
      <Investors />
      <Title subTitle='Meet our team' title='Team' />
      <Team />
      <Title subTitle='Testimonials' title='What Customers Says' />
      <Testimonials />
      <Title subTitle='Business Partners' title='Altaneofied' />
      <Partners />
      <Title subTitle='' title='' />
      <ContectUs />
      <Faqs />
      <Footer />
      <Bot />
    </div>
  </>
  )}

export default App