import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);

  const deleteDoctorDetails = () => {
    setDeleteDoctor(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://doctors-portal-server-main.vercel.app/doctors",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  if (isLoading) {
    return <div>loading</div>;
  }

  const handleDeleteDoctor = (doctor) => {
    fetch(
      `https://doctors-portal-server-main.vercel.app/doctors/${doctor._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast("successfully deleted");
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>
                  <label>
                    <td>{i + 1}</td>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={doctor.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>

                    <div className="font-bold">{doctor.name}</div>
                  </div>
                </td>
                <td>{doctor.email}</td>
                <td>{doctor.speciality}</td>
                <th>
                  <label
                    className="btn btn-error"
                    onClick={() => setDeleteDoctor(doctor)}
                    htmlFor="confirmation-modal"
                  >
                    Delete
                  </label>
                </th>
              </tr>
            ))}

            {deleteDoctor && (
              <ConfirmationModal
                deleteDoctorDetails={deleteDoctorDetails}
                Delete={handleDeleteDoctor}
                deleteDoctor={deleteDoctor}
                deleteMessage={`Delete`}
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deleteDoctor.name}. It cannot be undone`}
              ></ConfirmationModal>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
