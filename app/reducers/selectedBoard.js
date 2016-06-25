import * as types from '../constants/ActionTypes'

const selectedBoard = (state = null, action) => {
  switch (action.type) {
    case types.SELECT_BOARD:
      return action.boardId;
    default:
      return state;
  }
}

export default selectedBoard;
export const getSelectedId = (state) => state;
