import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import List from './List';

const Board: React.FC = () => {
  const lists = useSelector((state: RootState) => state.lists.lists);

  return (
    <div className="m-auto h-screen w-screen text-center flex overflow-x-scroll">
      {lists.map(list => (
        <List key={list.id} listId={list.id} />
      ))}
    </div>
  );
}

export default Board;
