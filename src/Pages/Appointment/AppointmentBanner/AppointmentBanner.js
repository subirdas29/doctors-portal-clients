import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [selected,setSelected]=useState(new Date())
    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className='max-w-sm rounded-lg shadow-lg'  alt='dentist chair'/>
    <div className='mr-6'>
    <DayPicker
     mode="single"
     selected={selected}
     onSelect={setSelected}
    />
    <p>Selected Date: {format(selected, 'PP')}</p>
    </div>
  </div>
</div>
    );
};

export default AppointmentBanner;