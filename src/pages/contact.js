import React from 'react';
import NavbarComp from "../components/layout/Navbar/Navbar"
import Footer from '../components/layout/Footer/Footer';
import ContactForm from '../components/ContactForm.js/ContactForm';
import "./style.css"


function Contact() {
  return (

    
    <div className="background">
        
      <NavbarComp />
      <ContactForm/>
      <Footer/>


     
    </div>
  );
}

export default Contact;