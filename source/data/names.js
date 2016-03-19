// ACTION TYPES
const ADD_NAME = 'ADD_NAME';
const DELETE_NAME = 'DELETE_NAME';

// STATE
const initialState = [];

// REDUCER
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

// ACTIONS
export function addName(name) {
  return { type: ADD_NAME, name };
}

export function deleteName(name) {
  return { type: DELETE_NAME, name };
}
