
import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cards = [
        {
            id:1,
            name: 'Opening Hours',
            description:'Lorem Ipsum is simply dummy text of the pri',
            icon:clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
        },
        {
            id:2,
            name: 'Visit our location',
            description:'Brooklyn, NY 10036, United States',
            icon:location,
            bgClass: 'bg-accent',
        },
        {
            id:3,
            name: 'Contact us now',
            description:'+000 123 456789',
            icon:phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
        },
    ]

    return (
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cards.map(card => <InfoCard key = {card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;