import React from 'react';
import DeleteCardButton from "./DeleteCardButton";
import { useDraggable } from '@dnd-kit/core';

interface CardProps {
    cardId: string;
    listId: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ cardId, listId, title, description }) => {
  const { attributes, listeners, setNodeRef, isDragging, transform } = useDraggable({
    id: cardId,
    data: { listId },
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className={`card group/card flex relative m-3 min-h-24 items-start rounded bg-off-white-light px-4 py-2 text-blue ${isDragging ? 'opacity-50' : ''}`}>
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
