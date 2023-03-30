import React, { useEffect, useState } from 'react';
import ManiCard from './ManiCard';
import ShoppingCard from './ShoppingCard';
import  './ManiContainer.css'

const ManiContainer = () => {
    const [cards, setCard] = useState([]);
    // buttnon handaler 
    const btnHandler =(getCard)=>{
        cards.find(card => {
            if(card.id === getCard.id){
                console.log('monir');
            }
        })
        setCard([...cards, getCard]); 
    }
    return (
        <div className='grid grid-cols-4'>
           <ManiCard btnClick={btnHandler}></ManiCard>
           <ShoppingCard cards={cards}/>
        </div>
    );
};
export default ManiContainer;