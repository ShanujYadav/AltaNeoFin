import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Solutions from './components/Solutions/Solutions';
import Title from './components/Title/Title';
import Numbers from './components/Customerbasenumber/Numbers';
import Testimonials from './components/Testimonials/Testimonials';
import Touch from './components/Touch/Touch';
import Footer from './components/Footer/Footer';
import Partners from './components/Partners/Partners';
import Team from './components/Team/Team';
import InvoiceDiscountingPage from './components/Invoice-Discounting/InvoiceDiscountingPage';
import ExportCredits from './components/ExportCredits/ExportCredits';
import VendorFinancing from './components/VendorFinancing/VendorFinancing';
import CreditCard from './components/CreditCard/CreditCard';
import Investors from './components/Investors/Investors';
import Login from './components/Login/login';
import Privacypolicy from './components/PrivacyPolicy/Privacypolicy';
import RefundPolicy from './components/Refund/RefundPolicy';
import Terms from './components/Terms/Terms';
import Bot from './components/Bot/bot';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import subBlog from './components/Blogs/subBlog';
import TeamPage from './components/Team/TeamPage';
import Admin from './components/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Faqs from './components/faq\'s/Faqs';


const App = () => {
  return (
    <Router>
        <Switch>
          {/* Routes for pages without Navbar */}
          <Route path={['/login', '/register']} component={Login} />
          {/* <Route path={['/Dashboard']} component={Navigation} /> */}
          <Route path='/Dashboard' component={Dashboard} />
          <Route path={['/admin']} component={Admin} />
           
          {/* Routes for pages with Navbar */}
          <Route>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path='/Invoice-Discounting' component={InvoiceDiscountingPage} />
              <Route exact path='/Export-Credits' component={ExportCredits} />
              <Route exact path='/Vendor-Financing' component={VendorFinancing} />
              <Route exact path='/Credit-Card' component={CreditCard} />
              <Route exact path='/Privacypolicy' component={Privacypolicy} />
              <Route exact path='/Refundpolicy' component={RefundPolicy} />
              <Route exact path='/Terms' component={Terms} />
              <Route exact path='/Blogs' component={Blogs} />
              {/* <Route exact path='/blog/:id' component={subBlog} /> */}
              <Route exact path='/TeamPage' component={TeamPage} />
            </Switch>
          </Route>
        </Switch>
    </Router>
  );
};

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
      <Title subTitle='Our COMMITMENTS' title='What We Offer' />
      <Solutions />
      <About />
      <Title subTitle='Leading Investors ' title='Valued From leading brands' />
      <Investors />
      <Title subTitle='Meet our team' title='Team' />
      <Team />
      <Title subTitle='Testimonials' title='What Customers Says' />
      <Testimonials />
      <Title subTitle='Business Partners' title='Altaneofied' />
      <Partners />
      <Title subTitle='Contact Us' title='Get in Touch' />
      <Touch />
      <Faqs />
      <Footer />
      <Bot />
    </div>
  </>
  )
}
export default App;