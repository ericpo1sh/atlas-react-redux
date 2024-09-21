import React from 'react';
import DeleteCardButton from "./DeleteCardButton";

interface CardProps {
    cardId: string;
    listId: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ cardId, listId, title, description }) => {
  return (
    <div className="card group/card flex relative m-3 min-h-24 items-start rounded bg-off-white-light px-4 py-2 text-blue">
      <div className="flex flex-col">
        <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
          <span>{title}</span>
        </h5>
        <p className="mt-0 text-left">
          {description}
        </p>
      </div>
      <div className="absolute top-4 right-4">
          <DeleteCardButton cardId={cardId} listId={listId} />
      </div>
    </div>
  );
}

export default Card;
