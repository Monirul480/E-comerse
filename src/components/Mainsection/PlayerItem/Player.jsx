import React from 'react';

const Player = (props) => {
    const {name, img,ratings, id} = props.card;
    
    return (
      <>
        <div id="cardPosition" className="top-0 text-neutral-950 text-black">
          <div className="flex items-center mt-3">
            <h1 className="text-xl font-medium">{props.n+1}</h1>
            <img
              className="h-10 w-10 rounded-3xl bg-slate-400 ml-3"
              src={img}
              alt=""
            />
            <h1 className="ml-4 text-xl font-medium">{name}</h1>
            <h1 className="ml-2">(Rating) {ratings}</h1>
          </div>
        </div>
      </>
    );
};

export default Player;