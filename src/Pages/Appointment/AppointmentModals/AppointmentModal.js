import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ booking, selected,setBooking }) => {
    const { name, slots } = booking
    const date = format(selected, 'PP')
    const handleSubmit= event =>{
        event.preventDefault();
        const form = event.target;
        const slot= form.slot.value;
        const name = form.name.value; 
        const email = form.email.value; 
        const phone = form.phone.value; 
        

        const bookingPerson = {
            appointmentDate:date,
            treatment:name,
            patient:name,
            slot,
            email,
            phone
        }

        console.log(bookingPerson)
        setBooking(null)
    }
    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={date} disabled className="input input-bordered w-full mt-6" />

                        <select name='slot' className="select select-bordered w-full mt-6">
                            {
                                slots.map((slot,i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>


                        <input type="text" name='name' placeholder="your name" className="input input-bordered w-full mt-6" />
                        <input type="text" name='email' placeholder="your email" className="input input-bordered w-full mt-6" />
                        <input type="text" name='phone' placeholder="your phone number" className="input input-bordered w-full mt-6" />
                        
                        <button type="submit" className='btn btn-primary text-white w-full my-6'> Submit</button>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;
