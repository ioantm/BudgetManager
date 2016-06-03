import { expect } from 'chai'
import * as actions from '../../app/actions'
import * as types from '../../app/constants/ActionTypes'
import rootReducer from '../../app/reducers'
import { fromJS } from 'immutable'

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
