import React from 'react';

const Reviews = ({ rev }) => {

    const { name, review, img, location } = rev
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <h2 className="">{review}</h2>

                    <div className='flex mt-10'>
                        <div className="avatar  mr-5">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} />
                            </div>
                        </div>
                        <div>
                            <p>{name}</p>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;