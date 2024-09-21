import React from 'react';
import { useSelector} from 'react-redux';
import DeleteListButton from "./DeleteListButton";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import { RootState } from '../store';
import { useDroppable } from '@dnd-kit/core';

interface ListProps {
    listId: string;
}

const List: React.FC<ListProps> = ({ listId }) => {
  const list = useSelector((state: RootState) =>
    state.lists.lists.find(list => list.id === listId)
  );

  const cards = useSelector((state: RootState) => state.lists.cards);

  if (!list) return null;

  const { setNodeRef } = useDroppable({
    id: listId,
  });

  return (
    <div ref={setNodeRef} className="group/list h-full min-w-44 p-4 z-0">
      <DeleteListButton listId={listId} />
      <h3>{list.title}</h3>
      {list.cardIds.map(cardId => {
        const card = cards[cardId];
        return (
          <Card key={cardId} cardId={cardId} listId={listId} title={card.title} description={card.description} />
        );
      })}
      <NewCardForm listId={listId} />
    </div>
  );
}

export default List;
