import { expect } from 'chai'
import * as actions from '../../app/actions'
import * as types from '../../app/constants/ActionTypes'
import rootReducer, { source } from '../../app/reducers'
import { fromJS, Map } from 'immutable'

describe('selectedBoard reducer', () => {
  it('should handle SELECT_BOARD', () => {
    expect(rootReducer(fromJS({
      selectedBoard: null,
      boards: []
    }), {
      type: types.SELECT_BOARD,
      boardId: 'b1'
    })).to.equal(fromJS({
      selectedBoard: 'b1',
      boards: []
    }))
  })
})


describe('source reducer', () => {
  it('should handle SET_BUDGET', () => {
    const sourceItem = Map({
      id: '2',
      name: 'my salary',
      value: 4000
    });

    const action = {
      type: types.SET_BUDGET,
      sourceId: '2',
      boardId: 'bq',
      value: 4200
    }

    expect(source(sourceItem, action)).to.equal(
      Map({
        id: '2',
        name: 'my salary',
        value: 4200,
      })
    )

  })

  it('should handle CREATE_SOURCE', () => {
    const board = Map({
      id: 'b1',
      sources: []
    });

    const action = {
      type: types.CREATE_SOURCE,
      boardId: 'b1',
      sourceId: 's1',
      name: 'some income name',
      value: 4000
    };

    let state;

    const expectedSource = Map({
      id: 's1',
      name: 'some income name',
      value: 4000
    });

    expect(source(state, action)).to.equal(expectedSource);
  })
})
