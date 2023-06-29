import React from 'react';

const AppointmentOptions = ({options,setBooking}) => {
    const {name,slots} = options
    return (
        <div className="card  shadow-xl">
  <div className="card-body text-center">
    <h2 className="text-2xl text-primary">{name}</h2>
    <p>{slots.length>0?slots[0]:'Not available'}</p>
    <p>{slots.length} {slots.length>1?'SPACES':'SPACE'} AVAILABLE</p>
    <div className="card-actions justify-center">
      
      <label disabled={slots.length===0} htmlFor="Booking-modal" onClick={()=>setBooking(options)} className="btn btn-primary text-white">BOOK APPOINTMENT</label>
    </div>
  </div>
</div>
    );
};

export default AppointmentOptions;