import React from 'react';
import NavbarComp from "../components/layout/Navbar/Navbar"
import Aboutme from "../components/Aboutme/ABoutme"
import Footer from '../components/layout/Footer/Footer';
import BootstrapCarousel from "../components/layout/carousel/Carousel"
import Techcard from "../components/TechCard/Techcard"
import Parallax from "../components/Parallax/Parallax"
import 'bootstrap/dist/css/bootstrap.min.css';
// import DemoCarousel from '../components/carousel/Carousel';



const HomePage =()=> {
 
  
  return (
          <>
    
    
      <NavbarComp/>
      {/* <Parallax/> */}
     
      <Aboutme/>
       <Parallax/> 
       <Techcard/>          
            <Parallax/> 
      <div className="container"> 
      <BootstrapCarousel />
      </div> 
        <Parallax/>

        
      <Footer/>    
   
           </>
      );
   
}

export default HomePage;