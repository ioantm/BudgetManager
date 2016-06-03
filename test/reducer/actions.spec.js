import expect from 'expect'
import * as actions from '../../app/actions'
import * as types from '../../app/constants/ActionTypes'
import { fromJS, Map } from 'immutable'

describe('action creators', () => {
  it('should create an action to select board', () => {
      const boardId = 'b1'
      const expectedAction = {
        type: types.SELECT_BOARD,
        boardId
      }

      expect(actions.selectBoard(boardId)).toEqual(expectedAction);
  })

  it('should create an action to add source', () => {
    const boardId = 'b1'
    const sourceId = 's1'
    const name = 'income name'
    const value = 4000

    const expectedAction = {
      type: types.CREATE_SOURCE,
      sourceId,
      boardId,
      name,
      value
    };

    expect(actions.createSource(boardId, sourceId, name, value)).toEqual(expectedAction);
  })

  it('should create action to set budget', () => {
    const boardId = 'b1';
    const sourceId = 's1';
    const value = 4000;
    const expectedAction = {
      type: types.SET_BUDGET,
      value,
      boardId,
      sourceId
    }

    expect(actions.setBudget(boardId, sourceId, value)).toEqual(expectedAction);
  })
})
