import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import MyTermsSection from '../MyTermsSection/MyTermsSection';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MyTermsSection></MyTermsSection>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;