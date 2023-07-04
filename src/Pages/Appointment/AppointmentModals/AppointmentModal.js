import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../../Context/AuthProvider";

const AppointmentModal = ({ booking, selected, setBooking, refetch }) => {
  const { user } = useContext(AuthContext);

  const { name: treatmentName, slots } = booking;
  const date = format(selected, "PP");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const bookingPerson = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
    };

    fetch("https://doctors-portal-server-main.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingPerson),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("booking done");
          setBooking(null);
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full mt-6"
            />

            <select name="slot" className="select select-bordered w-full mt-6">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              placeholder="your name"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full mt-6"
            />
            <input
              type="text"
              name="email"
              placeholder="your email"
              defaultValue={user?.email}
              disabled
              className="input input-bordered w-full mt-6"
            />
            <input
              type="text"
              name="phone"
              placeholder="your phone number"
              className="input input-bordered w-full mt-6"
            />

            <button
              type="submit"
              className="btn btn-primary text-white w-full my-6"
            >
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
