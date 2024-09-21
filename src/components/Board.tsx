import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import List from './List';
import {  DndContext, useSensor, useSensors, PointerSensor  } from '@dnd-kit/core';
import { moveCardBetweenLists } from '../slices/listsSlice';

const Board: React.FC = () => {
  const lists = useSelector((state: RootState) => state.lists.lists);
  const dispatch = useDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      }
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over) {
      const cardId = active.id;
      const sourceListId = active.data.current.listId;
      const destinationListId = over.id;

      if (sourceListId !== destinationListId) {
        dispatch(moveCardBetweenLists({ cardId, sourceListId, destinationListId }));
      }
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="m-auto h-screen w-screen text-center flex overflow-x-scroll">
        {lists.map(list => (
          <List key={list.id} listId={list.id} />
        ))}
      </div>
    </DndContext>
  );
}

export default Board;
