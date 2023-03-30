import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SingleCard.css'

const SingleCard = ({card,btnClick}) => {
  const {name, ratings, price, img} = card;
    return (
      <>
        <div id='box' className="bg-slate-200 w-72 rounded-xl shadow-lg shadow-cyan-500/50 hover:bg-slate-400">
          <img src={img}  alt="" className='rounded-lg h-52 w-full  object-scale-down'/>
          <div className='px-2 my-4 text-black'>
            <h3 className='text-xl'>Name : {name}</h3>
            <p>Price : ${price}</p>
            <p>Rating : {ratings} Stare</p>
          </div>
          <div className='text-center mb-5'>
              <button onClick={()=>btnClick(card)} className='bg-lime-400 rounded-md px-4 py-1 text-black hover:bg-lime-600'>
                Select    
                <FontAwesomeIcon className='pl-1' icon={faShoppingCart} />
                </  button>
          </div>
        </div>
      </>
    );
};

export default SingleCard;