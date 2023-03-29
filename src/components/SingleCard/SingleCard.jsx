import React from 'react';

const SingleCard = () => {
    return (
      <>
        <div className="bg-slate-200 w-72 rounded-xl shadow-lg shadow-cyan-500/50 hover:bg-slate-400">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKggPeBDcMNCtMvmc056sJd1x6HSo-PNkjMg&usqp=CAU" alt="" srcset="" className='rounded-lg'/>
          <div className='px-2 my-4 text-black'>
            <h3 className='text-xl'>Name : Sakib</h3>
            <p>Price : $100</p>
            <p>Rating : 5 Stare</p>
          </div>
          <div className='text-center mb-5'>
              <button className='bg-lime-400 rounded-md px-4 py-1 text-black hover:bg-lime-600'>Add to Card</  button>
          </div>
        </div>
      </>
    );
};

export default SingleCard;