import { normalize, Schema, arrayOf } from 'normalizr';

export const board = new Schema('boards');
export const arrayOfBoards = arrayOf(board);
export const source = new Schema('sources');

board.define({
  sources: arrayOf(source)
});
