jest.disableAutomock();

import * as types from '../../constants/ActionTypes'
import sourcesById, * as fromSources from '../sourcesById'
import { Map } from 'immutable'

describe('sourcesById reducer', () => {
  it('is empty by default', () => {
    expect(sourcesById(undefined, {})).toBe(Map())
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

    expect(fromSources.getSource(result, 's1')).toEqual(expectedSource);
  })
})
