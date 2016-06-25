import { expect } from 'chai'
import * as actions from '../../app/actions'
import * as types from '../../app/constants/ActionTypes'
import rootReducer, * as fromReducers from '../../app/reducers'
import { fromJS, Map, List } from 'immutable'

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
})
