import React from 'react';
import Footer from '../../Footer/Footer';
import Bot from '../../Bot/bot'
import Topbar from '../../common/Topbar';


const Privacypolicy = () => {
  return (
    <div>
      <Topbar
        title="Privacy Policy"
        desc="We prioritise the privacy of our’s users personal information. We use data responsibly ensuring compliance with relevant  laws and regulations."
        from="Home"
        to="Privacy Policy"
      />
      
      <div class="grid w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <div role="alert" class="relative w-full text-base font-regular px-4 py-4 rounded-lg">
          <h2 className='mt-3 text-2xl	 font-semibold'>Definitions</h2>
          <hr className='mb-3' />
          <p className='mb-4 text-base text-justify	'>
            <strong>Altaneo:</strong> These Terms of Use govern your use of the website owned and
            operated by AltaNeo Fintech Private Limited , i.e., www.altaneo.com
            ('Website'). Additional terms and conditions applicable to specific areas of this
            Website or to particular content or transactions are also posted in particular areas of
            the Website and, together with these terms of use, govern your use of those areas,
            content, or transactions. These terms of use, together with applicable additional terms
            and conditions, are referred to as "T&C." Altaneo operates this Website to provide
            online access to information about Altaneo and the products, services, and opportunities
            we provide at Altaneo ('Services'). Please read these T&C carefully before you use the
            Services. If you do not agree to these T&C, you may not use the Services. By using the
            Website, you signify your acceptance of the T&C, which takes effect immediately upon
            your use of the Services, and create a legally binding arrangement to abide by the same.
          </p>
          <p className='mb-4 text-base text-justify	'>
            <strong>Altaneo:</strong> The Services are operated and owned by Altaneo (hereinafter
            referred to as “Altaneo”, “we”, “us”, or “our”), a company registered in Gurugram.
          </p>
          <p className='mb-4 text-base text-justify	'>
            <strong>T&C Changes:</strong> We reserve the right to change the T&C at any time
            without notice by posting changes on our Website, and you shall be liable to update
            yourself of such changes, if any, by accessing the changes on the Website.
          </p>
          <p className='mb-4 text-base text-justify	'>
            <strong>User Age:</strong> In order to access or use the Services, you must be 18 years
            of age or over. If you are under 18 and you wish to access or use the Services, your
            parents or legal guardian must acknowledge and agree to this T&C. Should your parents
            or legal guardian fail to agree or acknowledge the T&C, you shall immediately
            discontinue its use.
          </p>


          <h2 className='mt-5 text-2xl font-semibold'>Password Security</h2>
          <hr />
          <p className='my-3 text-base text-justify'>
            If you register on the Website, you are responsible for maintaining the confidentiality of your identification and password
            information and for restricting access to your computer. You agree to accept responsibility for all activities that occur
            under your member identification and password.
          </p>
          <h2 className='mt-5 text-2xl font-semibold'>DISCLAIMERS</h2>
          <hr />
          <p className='mb-3 text-base text-justify	'>
            <strong>Website Upgrades:</strong>  The website may be under constant upgrades, and some functions and features may not be fully operational.
          </p>
          <p className='mb-3 text-base text-justify	'>
            <strong>Liability Disclaimer:</strong>  We disclaim any liability arising due to the vagaries that can occur in the electronic distribution of information.
          </p>
          <p className='mb-3 text-base text-justify	'>
            <strong>Third-party Services:</strong> You acknowledge that third-party services are available on the website. We may have formed partnerships or
            alliances with some of these third parties from time to time to facilitate the provision of certain services to you. However, you acknowledge
            and agree that at no time are we making any representation or warranty regarding any third party's services, nor will we be liable to you or
            any third party for any consequences or claims arising from or in connection with such third party, including, and not limited to, any liability
            or responsibility for death, injury, or impairment experienced by you or any third party. You hereby disclaim and waive any rights and claims you
            may have against us with respect to third-party services. </p>
          <p className='mb-3 text-base text-justify	'>
            <strong>Endorsement Disclaimer:</strong>  We do not, in any way, endorse any information or service offered or described herein. In no event
            shall we be liable to you or any third party for any decision made or action taken in reliance on such information. </p>
        </div>
      </div>
      <Footer />
      <Bot />
    </div>
  )
}

export default Privacypolicy