import reducer, { ListsState, addList, deleteList, deleteCardFromList, addCardToList, clearBoard, moveCardBetweenLists } from '../slices/listsSlice'
import { describe, it, expect } from 'vitest';

describe('listsSlice reducer', () => {
  const initialState: ListsState = {
    lists: [],
    cards: {},
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle addList', () => {
    const action = addList({ title: 'New List' });
    const newState = reducer(initialState, action);

    expect(newState.lists.length).toBe(1);
    expect(newState.lists[0].title).toBe('New List');
    expect(newState.lists[0].cardIds).toEqual([]);
  });

  it('should handle deleteList', () => {
    const stateWithList: ListsState = {
      lists: [{ id: '1', title: 'Test List', cardIds: [] }],
      cards: {},
    };

    const action = deleteList('1');
    const newState = reducer(stateWithList, action);

    expect(newState.lists.length).toBe(0);
  });

  it('should handle addCardToList', () => {
    const stateWithList: ListsState = {
      lists: [{ id: '1', title: 'Test List', cardIds: [] }],
      cards: {},
    };

    const action = addCardToList({ listId: '1', title: 'New Card', description: 'Card description' });
    const newState = reducer(stateWithList, action);

    expect(newState.lists[0].cardIds.length).toBe(1);
    const cardId = newState.lists[0].cardIds[0];
    expect(newState.cards[cardId].title).toBe('New Card');
    expect(newState.cards[cardId].description).toBe('Card description');
  });

  it('should handle clearBoard', () => {
    const stateWithData: ListsState = {
      lists: [{ id: '1', title: 'Test List', cardIds: ['1'] }],
      cards: { '1': { id: '1', title: 'Card', description: 'Card description' } },
    };

    const action = clearBoard();
    const newState = reducer(stateWithData, action);

    expect(newState.lists).toEqual([]);
    expect(newState.cards).toEqual({});
  });

  it('should handle deleteCardFromList', () => {
    const stateWithCard: ListsState = {
      lists: [{ id: '1', title: 'Test List', cardIds: ['card1'] }],
      cards: { card1: { id: 'card1', title: 'Card', description: 'Card description' } },
    };

    const action = deleteCardFromList({ listId: '1', cardId: 'card1' });
    const newState = reducer(stateWithCard, action);

    expect(newState.lists[0].cardIds.length).toBe(0);
    expect(newState.cards['card1']).toBeTruthy();
  });

  it('should handle moveCardBetweenLists', () => {
    const stateWithTwoLists: ListsState = {
      lists: [
        { id: 'list1', title: 'List 1', cardIds: ['card1'] },
        { id: 'list2', title: 'List 2', cardIds: [] },
      ],
      cards: { card1: { id: 'card1', title: 'Card', description: 'Card description' } },
    };

    const action = moveCardBetweenLists({ sourceListId: 'list1', destinationListId: 'list2', cardId: 'card1' });
    const newState = reducer(stateWithTwoLists, action);

    expect(newState.lists[0].cardIds.length).toBe(0);
    expect(newState.lists[1].cardIds.length).toBe(1);
    expect(newState.lists[1].cardIds[0]).toBe('card1');
  });
});
