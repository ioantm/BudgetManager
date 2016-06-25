import { expect } from 'chai'
import * as types from '../../app/constants/ActionTypes'
import sourcesById, * as fromSources from '../../app/reducers/sourcesById'
import { Map } from 'immutable'

describe('sourcesById reducer', () => {
  it('is empty by default', () => {
    expect(sourcesById(undefined, {})).to.equal(Map())
  })

  it('should create source', () => {
    const action = {
      type: types.CREATE_SOURCE,
      boardId: 'b1',
      sourceId: 's1',
      name: 'some income name',
      value: 4000
    };

    const expectedSource = Map({
      id: 's1',
      name: 'some income name',
      value: 4000
    });

    const result = sourcesById(undefined, action);

    expect(fromSources.getSource(result, 's1')).to.equal(expectedSource);

    const prevState = Map({
      's2': 's2':{
        id: 's2',
        name: 'my salary',
        value: 4000
      }
    })

    
  })
})
