jest.disableAutomock();

import selectedBoard, * as fromSelectedBoard from '../selectedBoard'
import * as types from '../../constants/ActionTypes'

describe('selectedBoard reducer', () => {
  it('is null by default', () => {
    expect(selectedBoard(undefined, {})).toBe(null);
  });

  it('update selected board', () => {
    const action = {
      type: types.SELECT_BOARD,
      boardId: 'b1'
    }

    const result = selectedBoard(undefined, action);

    expect(fromSelectedBoard.getSelectedId(result)).toBe('b1')
  })
});