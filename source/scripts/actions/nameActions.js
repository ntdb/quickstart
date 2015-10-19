import * as types from '../constants/ActionTypes';

export function addName(name) {
  return { type: types.ADD_NAME, name };
}

export function deleteName(name) {
  return { type: types.DELETE_NAME, name };
}
