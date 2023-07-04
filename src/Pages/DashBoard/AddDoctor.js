import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const handleDoctor = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(`https://api.imgbb.com/1/upload?&key=${imgHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.select,
            image: imgData.data.url,
          };
          fetch("https://doctors-portal-server-main.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                toast.success("Added Doctor");
              } else {
                toast.error(data.message);
              }
            });
        }
      });
  };

  const { data: specialities, isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-main.vercel.app/appointmentSpeciality"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="w-96 p-7">
      <h2>Add doctor</h2>
      <form onSubmit={handleSubmit(handleDoctor)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-xl">Your Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          {errors.name && (
            <p className="text-red-600" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-xl">Email</span>
          </label>
          <input
            type="text"
            {...register("email", { required: "Email Address is required" })}
            placeholder="Email"
            className="input input-bordered w-full"
          />
          {errors.email && (
            <p className="text-red-600" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-xl">Speciality</span>
          </label>
          <select
            className="select w-full max-w-xs input-bordered"
            {...register("select", { required: "select is required" })}
          >
            {specialities?.map((speciality) => (
              <option key={speciality._id} value={speciality.name}>
                {speciality.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-xl">Upload Image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Image is required" })}
            className="input input-bordered w-full"
          />
        </div>

        <input
          type="submit"
          className="btn btn-accent w-full mt-4"
          value="Add Doctor"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
