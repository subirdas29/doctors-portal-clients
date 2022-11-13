import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MyTermsSection = () => {
    return (
        <div className="hero mt-32">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} alt='' className="lg:max-w-sm rounded-lg shadow-2xl lg:mr-[102px]" />
    <div className='lg:w-1/2'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default MyTermsSection;