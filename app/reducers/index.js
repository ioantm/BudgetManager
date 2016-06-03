import { combineReducers } from 'redux-immutable'
import * as types from '../constants/ActionTypes'
import { List, Map } from 'immutable'

const source = (state, action) => {
  switch (action.type)  {
    case types.SET_BUDGET:
      return state.set('value', action.value);
    case types.CREATE_SOURCE:
      return Map({
        id: action.sourceId,
        name: action.name,
        value: action.value
      });
    default:
      return state;
  }
}

const board = (state, action) => {
  return state;
}

const boards  = (state = List(), action) => {
  return state;
}

function selectedBoard(state = null, action) {
  switch (action.type) {
    case types.SELECT_BOARD:
      return action.boardId
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedBoard,
  boards
})

export {
  source
}
export default rootReducer;
