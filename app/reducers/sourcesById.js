import { Map } from 'immutable'
import * as types from '../constants/ActionTypes'

const sourcesById = (state = Map(), action) => {
  switch (action.type) {
    case 'CREATE_SOURCE_SUCCESS':
      return state.merge(action.response.entities.sources);
    default:
      return state;
  }
}

export default sourcesById
export const getSource = (state, id) => state.get(id)
