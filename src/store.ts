import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from "react-redux";
import listsReducer from './slices/listsSlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistedListsRecuder = persistReducer(
  { key: "lists", storage },
  listsReducer 
);

export const store = configureStore({
  reducer: {
    lists: persistedListsRecuder, 
  },
});

// These types are helpful for the typescript autocomplete
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Add types to dispatch and selector hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const persistor = persistStore(store);
