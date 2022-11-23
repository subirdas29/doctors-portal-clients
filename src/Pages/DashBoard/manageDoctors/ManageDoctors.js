import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {

    const {data:doctors=[],isLoading} = useQuery({
        queryKey: ['doctors'],
        queryFn: async()=>{
           const res = await fetch('http://localhost:5000/doctors',{
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            },
           })
           const data = await res.json()
           return data;
        }
        })

    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
         
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Speciality</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  
      {
        doctors.map((doctor,i)=> 
        <tr key={doctor._id}>
            <th>
              <label>
                <td>{i+1}</td>
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              
                  <div className="font-bold">{doctor.name}</div>
                
                
              </div>
            </td>
            <td>
            {doctor.email}
            </td>
            <td>{doctor.speciality}</td>
            <th>
              <button className="btn btn-error ">Delete</button>
            </th>
          </tr>)
      }
    
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default ManageDoctors;