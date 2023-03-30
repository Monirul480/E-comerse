import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const ManiCard = ({btnClick}) => {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
        <div className="col-span-3 grid grid-cols-3 gap-5 px-6 justify-items-center py-4">
          {cards.map((card) => (
            <SingleCard btnClick={btnClick} card={card} key={card.id} />
          ))}
        </div>
  );
};

export default ManiCard;
