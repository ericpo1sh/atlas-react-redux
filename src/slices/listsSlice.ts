import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface List {
  id: string;
  title: string;
  cardIds: string[];
}

interface Card {
  id: string;
  title: string;
  description: string;
}

interface ListsState {
  lists: List[];
  cards: Record<string, Card>;
}

const initialState: ListsState = {
  lists: [],
  cards: {},
};

const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{ title: string }>) => {
      const newList: List = {
        id: Date.now().toString(),
        title: action.payload.title,
        cardIds: [],
      };
      state.lists.push(newList);
    },
    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },
    deleteCardFromList: (state, action: PayloadAction<{ listId: string; cardId: string }>) => {
      const list = state.lists.find(list => list.id === action.payload.listId);
      if (list) {
        list.cardIds = list.cardIds.filter(id => id !== action.payload.cardId);
      }
    },
    addCardToList: (state, action: PayloadAction<{ listId: string; title: string; description: string }>) => {
      const { listId, title, description } = action.payload;
      const list = state.lists.find(list => list.id === listId);
      if (list) {
        const newCardId = generateUniqueId();
        list.cardIds.push(newCardId);
        state.cards[newCardId] = { id: newCardId, title, description };
      }
    },
    clearBoard: (state) => {
        state.lists = [];
        state.cards = {};
    },
  },
});

export const { addList, deleteList, addCardToList, clearBoard, deleteCardFromList } = listsSlice.actions;
export default listsSlice.reducer;
