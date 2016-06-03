import * as types from '../constants/ActionTypes'

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

export function createSource(boardId, sourceId, name, value) {
  return {
    type: types.CREATE_SOURCE,
    boardId,
    sourceId,
    name,
    value
  }
}
