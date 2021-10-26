import React from 'react';
import Banner from './mainContainerComponent/Banner'
import Services from './mainContainerComponent/Services'
import Pricing from './mainContainerComponent/Pricing'
import Footer from './mainContainerComponent/Footer'
export default function MainContainer(){

    return(
        <div className='maincontainercomponent'>
            <Banner 
            title="We get you from Zero to job-ready" 
            class=' banner-img visible'
            subtitle="& Turn into a coding magician"
            />
            <Services />
            <Pricing />
            <Footer />
        </div>
    )
}
