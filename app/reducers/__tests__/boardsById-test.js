jest.disableAutomock();

import * as types from '../../constants/ActionTypes'
import boardsById, * as fromBoards from '../boardsById'
import { Map, List } from 'immutable'

describe('boardsById reducer', () => {
	it('is empty by default', () => {
		expect(boardsById(undefined, Map())).toEqual(Map());
	})

	it('should add created source', () => {
		const state = Map({
			'b1': Map({
				id: 'b1',
				sources: List()
			})
		});

		const action = {
	      type: types.CREATE_SOURCE,
	      boardId: 'b1',
	      sourceId: 's1',
	      name: 'some income name',
	      value: 4000
	    };

	    const nextState = Map({
			'b1': Map({
				id: 'b1',
				sources: List(['s1'])
			})
		});

		expect(boardsById(state, action)).toEqual(nextState);
	})

	it('sould handle LOAD_BOARDS_SUCCESS', () => {
		const action = {
			type: 'LOAD_BOARDS_SUCCESS',
			response:{
				entities: {
					boards: {
						b1:{
							id: 'b1'
						}
					}
				}
			}
		}

		expect(boardsById(undefined, action)).toEqual(Map({
			'b1': Map({
				id: 'b1'
			})
		}));
	});

	it('should handle CREATE_BOARDS_SUCCESS', () => {
		expect(boardsById(undefined, {
			type: 'CREATE_BOARDS_SUCCESS',
			response:{
				entities: {
					boards: {
						b1:{
							id: 'b1'
						}
					}
				}
			}
		})).toEqual(Map({
			'b1': Map({
				id: 'b1'
			})
		}))
	})
});
