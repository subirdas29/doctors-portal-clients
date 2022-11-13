import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div className="hero mt-44" style={{background: `url(${appointment})`}}>
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} alt='' className="lg:w-1/2 -mt-36 hidden md:block rounded-lg shadow-2xl" />
    <div className='text-white'>
        <p className='text-xl text-primary'>Appointment</p>
      <h1 className="text-4xl font-semibold my-4">Make an appointment Today</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <PrimaryButton>Appointment</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default MakeAppointment;