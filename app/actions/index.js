import * as types from '../constants/ActionTypes'
import * as api from '../api'
import * as schema from '../schema'
import { normalize } from 'normalizr'
import * as reducers from '../reducers'
import uuid from 'uuid'

export function selectBoard(boardId) {
  return {
    type: types.SELECT_BOARD,
    boardId
  }
}

export function setBudget(boardId, sourceId, value) {
  return {
      type: types.SET_BUDGET,
      value,
      boardId,
      sourceId
  }
}

// export function createSource(boardId, sourceId, name, value) {
//   return {
//     type: types.CREATE_SOURCE,
//     boardId,
//     sourceId,
//     name,
//     value
//   }
// }

export function loadBoards() {
  return function(dispatch) {
    dispatch({
        type: 'LOAD_BOARDS_START'
    });

    return api.loadBoards()
      .then(response => dispatch({
        type: 'LOAD_BOARDS_SUCCESS',
        response: normalize(response || [], schema.arrayOfBoards)
      }), err => dispatch({
        type: 'LOAD_BOARDS_ERROR',
        message: err
      }));
  }
}

async function getOrCreateFirstBoard(dispatch, getState){
  const first = reducers.getFirstBoardId(getState());
  if (first) {
    return first;
  } else {
    await dispatch(createBoard())
    return reducers.getFirstBoardId(getState());
  }
}

export function selectFirstBoard() {
  return (dispatch, getState) => {
    getOrCreateFirstBoard(dispatch, getState).then(
      (boardId) => dispatch(selectBoard(boardId))
    );
  }
}

export function createBoard() {
  return function(dispatch) {
    dispatch({
      type: 'CREATE_BOARD_START'
    })

    return api.createBoard()
      .then(response => dispatch({
        type: 'CREATE_BOARD_SUCCESS',
        response: normalize(response, schema.board)
      }), err => {
        dispatch({
          type: 'CREATE_BOARD_ERROR',
          message: err
        })
      })
  }
}

export function createSource(boardId, sourceData) {
  return function(dispatch) {
    dispatch({
      type: 'CREATE_SOURCE_START'
    })

    return api.createSource(boardId, { ...sourceData, id: uuid.v4() })
      .then(response => {
        dispatch({
          type: 'CREATE_SOURCE_SUCCESS',
          boardId,
          sourceId: response.id,
          response: normalize(response, schema.source)
        });

        return response;
      }, (err) => dispatch({
        type: 'CREATE_SOURCE_ERROR',
        message: err
      }))
    }
}

export function selectElement(boardId, id) {
  return {
    type: 'SELECT_ELEMENT',
    boardId,
    id
  };
}

export function updateSource(boardId, sourceId, props) {
  return function(dispatch) {
    dispatch({
      type: 'UPDATE_SOURCE_START'
    })

    return api.updateSource(boardId, sourceId, props)
      .then(response => dispatch({
        type: 'UPDATE_SOURCE_SUCCESS',
        boardId,
        response: normalize(response, schema.source)
      }), (err) => dispatch({
        type: 'UPDATE_SOURCE_ERROR',
        message: err
      }));
  }
}
