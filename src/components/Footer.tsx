import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList, clearBoard } from '../slices/listsSlice';

const Footer: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (title.trim()) {
          dispatch(addList({ title }));
          setTitle('');
      }
  };

  const handleClearBoard = () => {
      dispatch(clearBoard());
  };

    return (
      <footer
        className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder="List title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light mr-1">
          Save
        </button>
        <button
          onClick={handleClearBoard}
          type="button"
          className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light ml-1">
            Clear Board
          </button>
        </form>
      </footer>
    );
}

export default Footer;
