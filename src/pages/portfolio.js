import React from 'react';
import NavbarComp from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer"
import Wrapper from "../components/layout/Wrapper/Wrapper"
import PortfolioCards from "../components/layout/portfolio/PortfolioCards"
import SearchBar from "../components/layout/SearchBar"
import {Provider} from 'react-redux';
import store from '../store'

const Portfolio =()=> {
    

    
  return ( 
  
       <Provider store={store}>
            <NavbarComp/>
              <SearchBar/>
          
                <Wrapper> 
                
                <PortfolioCards/>
                        
                
              
                </Wrapper>
            
          
            <Footer/>
       
      </Provider>
    
  )
}
    

export default Portfolio;