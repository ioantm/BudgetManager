import { Map } from 'immutable'
import * as types from '../constants/ActionTypes'

const boardsById = (state = Map(), action) => {
  switch (action.type) {
  	case types.CREATE_SOURCE:
  		return state.updateIn([action.boardId, 'sources'], (sources) => sources.push(action.sourceId));
  	default:
      if (action.response) {
        return state.merge(action.response.entities.boards)
      } else {
        return state;
      }
  }
}

export default boardsById
export const getBoard = (state, id) => state.get(id)
