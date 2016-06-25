import { expect } from 'chai'
import * as types from '../../app/constants/ActionTypes'
import selectedBoard, * as fromSelectedBoard from '../../app/reducers/selectedBoard'

describe('selectedBoard reducer', () => {
  it('is null by default', () => {
    expect(selectedBoard(undefined, {})).to.equal(null);
  });

  it('update selected board', () => {
    const action = {
      type: types.SELECT_BOARD,
      boardId: 'b1'
    }

    const result = selectedBoard(undefined, action);

    expect(fromSelectedBoard.getSelectedId(result)).to.equal('b1')
  })
});
