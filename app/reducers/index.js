import { combineReducers } from 'redux-immutable'
import * as types from '../constants/ActionTypes'
import { List, Map } from 'immutable'
import selectedBoard, * as fromSelectedBoard from './selectedBoard'
import boardsById, * as fromBoardsById from './boardsById'
import sourcesById, * as fromSourcesById  from './sourcesById';
import boardsIds, * as fromBoardsIds from './boardsIds';

const rootReducer = combineReducers({
  selectedBoard,
  boardsIds,
  boardsById,
  sourcesById
})

export default rootReducer;

export const getSelectedBoard = (state) =>
  fromBoardsById.getBoard(
    state.get('boardsById'),
    fromSelectedBoard.getSelectedId(state.get('selectedBoard'))
  )

export const getSelectedBoardId = (state) =>
  fromSelectedBoard.getSelectedId(state.get('selectedBoard'))

export const getSource = (state, id) =>
  fromSourcesById.getSource(state.get('sourcesById'), id)
