import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selected}) => {
    return (
        <section>
            <p className='text-center text-secondary mb-10'>Available Appointments on {format(selected,'PP')}</p>
        </section>
    );
};

export default AvailableAppointment;