import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div className='text-center py-16' style={{background:`url(${appointment})`}}>

            <p className='text-xl text-primary'>Contact us</p>
            <p className='text-4xl text-white'>Stay Connected with us</p>

            <div className="hero ">
  <div className="hero-content">
    
    <div className="card ">
      <div className="card-body w-96">
        <div className="form-control ">
          
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          
          <input type="text" placeholder="Subject" className="input input-bordered" />
          
        </div>
        <textarea className="textarea textarea-primary" placeholder="Your message"></textarea>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white w-[120px] mx-auto">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactUs;