jest.disableAutomock();

import * as types from '../../constants/ActionTypes'
import sourcesById, * as fromSources from '../sourcesById'
import { Map } from 'immutable'
import { normalize } from 'normalizr'
import * as schema from '../../schema';

describe('sourcesById reducer', () => {
  it('is empty by default', () => {
    expect(sourcesById(undefined, {})).toBe(Map())
  })

  it('should create source', () => {
    const action = {
      type: 'CREATE_SOURCE_SUCCESS',
      boardId: 'b1',
      response: normalize({
        name: 'some income name',
        value: 4000,
        id: 's1'
      }, schema.source)
    };

    const expectedSource = Map({
      name: 'some income name',
      value: 4000,
      id: 's1'
    });

    const result = sourcesById(undefined, action);

    expect(fromSources.getSource(result, 's1')).toEqual(expectedSource);
  })
})
