import React from 'react';
import teeth from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const allServices =[
        {
            id:1,
            name:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:teeth,
        },
        {
            id:2,
            name:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:cavity,
        },
        {
            id:1,
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:teeth,
        },
    ]
    return (
        <div className='mt-32'>
            <p className='text-xl text-primary uppercase text-center'>OUR SERVICES</p>
            <h2 className='text-3xl text-center'>Services We Provide</h2>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                allServices.map(allService=><Service key={allService.id} allService={allService}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;