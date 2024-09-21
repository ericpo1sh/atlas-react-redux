import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCardToList } from '../slices/listsSlice';

interface NewCardFormProps {
    listId: string;
}

const NewCardForm: React.FC<NewCardFormProps> = ({ listId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault(); 
      if (title.trim() && description.trim()) {
          dispatch(addCardToList({ listId, title, description }));
          setTitle('');
          setDescription('');
      }
  };

  return (
    <div className="group/new-card m-3 flex h-44 justify-center">
      <form
        onSubmit={handleSubmit}
        className="min-h-26 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue"
      >
        <input
          className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none"
          autoFocus
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="buttons w-full">
          <button type="submit" className="w-full">Save</button>
        </div>
      </form>
    </div>
  );
}

export default NewCardForm;
