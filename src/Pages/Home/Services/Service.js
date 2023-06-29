import React from 'react';

const Service = ({allService}) => {
    const {name,icon,description}= allService;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img src={icon} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className=" text-2xl  ">{name}</h2>
    <p>{description}</p>
    
  </div>
</div>
    );
};

export default Service;