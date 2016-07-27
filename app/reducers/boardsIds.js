import { List } from 'immutable';

const boardsIds = (state = List(), action) => {
  switch (action.type) {
    case 'LOAD_BOARDS_SUCCESS':
    console.log('action.response.result', action.response.result);
      return state.merge(action.response.result);
    case 'CREATE_BOARD_SUCCESS':
      return state.push(action.response.result);
    default:
      return state;
  }
}

export const getAllBoardsIds = (state) => state;
export const getFirstBoardId = (state) => state.get(0);
export default boardsIds;
