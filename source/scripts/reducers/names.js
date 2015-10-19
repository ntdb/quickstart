import { ADD_NAME, DELETE_NAME } from '../constants/ActionTypes';

const initialState = [];

export default function names(state = initialState, action) {
  switch (action.type) {
  case ADD_NAME:
    return [...state, action.name];
  case DELETE_NAME:
    return state.filter((name) => name !== action.name);
  default:
    return state;
  }
}
