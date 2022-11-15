import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from '../AppointmentModals/AppointmentModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({selected}) => {

    const [appointmentOptions,setAppointmentOptions] = useState([])
    const [booking,setBooking]=useState(null)
    
    useEffect(()=>{
        fetch('http://localhost:5000/appointmentOptions')
        .then(res=>res.json())
        .then(data=>setAppointmentOptions(data))
    },[])
    return (
        <section>
            <p className='text-center text-secondary mb-10'>Available Appointments on {format(selected,'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12 my-16'>
            {
                appointmentOptions.map(options => <AppointmentOptions key={options._id} setBooking={setBooking} options={options}></AppointmentOptions>)
            }
    {
        booking && 
        <AppointmentModal selected={selected} setBooking={setBooking}  booking={booking}></AppointmentModal>
    }
            </div>
        </section>
    );
};

export default AvailableAppointment;