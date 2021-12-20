import React from 'react';
import Navbar from './Navbar';
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';
import RightSection from './RightSection';
import Footer from './Footer';
const Index = () => {
    return (
        <div className='container-fluid' id="mainSection">
            <div className='row'>
               <Navbar />
               < LeftSection />
               < MiddleSection />
               < RightSection />
            </div>
            <Footer/>
        </div>
    )
}

export default Index;
