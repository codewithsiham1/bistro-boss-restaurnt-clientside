import React from 'react';
import Banner from './Banner/Banner';
import Sectiontitle from '../../Components/Sectiontitle/Sectiontitle';
import Card from './card/Card';
import ContactForm from './ContactForm/ContactForm';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <div>
              <Helmet>
             <title>Bistro Boss | Contact Us</title>
              </Helmet>
          <Banner></Banner>
          {/* section title */}
          <Sectiontitle subHeading="Visit Us" heading="Our Location">

          </Sectiontitle>
          {/* Our location section */}
          <Card></Card>
          {/*  */}
          {/* section title */}
          <Sectiontitle subHeading="Send Us a Message" heading="Contact Form">

</Sectiontitle>
          {/* form */}
          <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;