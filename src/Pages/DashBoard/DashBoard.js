import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);

  const uri = `https://doctors-portal-server-main.vercel.app/bookings?email=${user?.email}`;
  const { data: bookedDashboard = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(uri, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {bookedDashboard?.map((dash, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{dash.patient}</td>
                <td>{dash.treatment}</td>
                <td>{dash.appointmentDate}</td>
                <td>{dash.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
