import React from 'react';
import Player from './PlayerItem/Player';
import './ShoppingCard.css'


const ShoppingCard = ({cards}) => {
  let proceTotla = 0;
  cards.map(pri  => {
    const p = pri.price;
    proceTotla = proceTotla+p;
  })
  return (
    <div className="bg-slate-300  rounded-xl shadow-lg shadow-cyan-700/50 h-64 mt-4 mr-4 ps flex flex-col justify-between">
        <div className='p-3'>
          
          <h1 className="text-black text-center text-xl font-bold mt-2 italic ">
            Your tem
          </h1>
          {
            cards.map((card, index) => (
              <Player n={index}  key={card.id} card={card}></Player>
            ))
          }
        <p className="text-blue-600 font-medium mt-2">Total Const: ${proceTotla}</p>
        </div>
        <div className="w-full text-center">
          <button  className=" bg-lime-500 w-full text-black py-1 font-medium hover:bg-lime-600 px-5 rounded-lg">
            All Clear
          </button>
        </div>
      </div>
    );
};
 
export default ShoppingCard;