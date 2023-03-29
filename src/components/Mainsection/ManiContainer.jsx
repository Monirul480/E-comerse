import React from 'react';
import ManiCard from './ManiCard';
import ShoppingCard from './ShoppingCard';
import  './ManiContainer.css'

const ManiContainer = () => {
    return (
        <div className='grid grid-cols-4'>
           <ManiCard />
           <ShoppingCard />
        </div>
    );
};

export default ManiContainer;