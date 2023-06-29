import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import AppointmentModal from "../AppointmentModals/AppointmentModal";
import AppointmentOptions from "./AppointmentOptions";
import IsLoading from "../../Shared/isLoading/IsLoading";

const AvailableAppointment = ({ selected }) => {
  // const [appointmentOptions,setAppointmentOptions] = useState([])
  const [booking, setBooking] = useState(null);
  const date = format(selected, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-main.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <IsLoading></IsLoading>;
  }

  // useEffect(()=>{
  //     fetch('https://doctors-portal-server-main.vercel.app/appointmentOptions')
  //     .then(res=>res.json())
  //     .then(data=>setAppointmentOptions(data))
  // },[])
  return (
    <section>
      <p className="text-center text-secondary mb-10">
        Available Appointments on {format(selected, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12 my-16">
        {appointmentOptions.map((options) => (
          <AppointmentOptions
            key={options._id}
            setBooking={setBooking}
            options={options}
          ></AppointmentOptions>
        ))}
        {booking && (
          <AppointmentModal
            selected={selected}
            refetch={refetch}
            setBooking={setBooking}
            booking={booking}
          ></AppointmentModal>
        )}
      </div>
    </section>
  );
};

export default AvailableAppointment;
