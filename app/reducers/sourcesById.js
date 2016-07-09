import { Map } from 'immutable'
import * as types from '../constants/ActionTypes'

const sourcesById = (state = Map(), action) => {
  if (action.response) {
  	return state.merge(action.response.entities.sources);
  } 

  return state;
}

export default sourcesById
export const getSource = (state, id) => state.get(id)
