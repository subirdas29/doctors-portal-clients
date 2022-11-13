import React from 'react';
import person1 from '../../../assets/images/people1.png';
import person2 from '../../../assets/images/people2.png';
import person3 from '../../../assets/images/people3.png';
import quotes from '../../../assets/icons/quote.svg'
import Reviews from './Reviews';

const Testimonial = () => {
    const reviews = [
        {
            id:1,
            name:'Winson Herry', 
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:person1,
            location:'California'
        },
        {
            id:2,
            name:'Winson Herry', 
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:person2,
            location:'California'
        },
        {
            id:3,
            name:'Winson Herry', 
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:person3,
            location:'California'
        },
    ]
    return (
        <section className='my-20 mx-14'>

            <div className='flex justify-between'>
            <div>
             <p className='font-bold text-xl text-primary'>Testimonial</p>
             <p className='text-4xl'>What Our Patients Says</p>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quotes} alt=""/>
                </figure>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    reviews.map(rev => <Reviews key={rev.id} rev={rev}></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;