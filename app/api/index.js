import { AsyncStorage } from 'react-native'
import uuid from 'uuid';

const STORAGE_KEY = '@boards_key_for_user';

async function getLocalData() {
  return JSON.parse(await AsyncStorage.getItem(STORAGE_KEY));
}

async function saveLocalData(data) {
  return await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(data));
}

export async function loadBoards() {
  return getLocalData().then(result => Promise.resolve(result && result.boards));
}

export async function createBoard() {
  const board = {
    id: uuid.v4()
  };
  const boards = await loadBoards();

  await saveLocalData({
    boards: [board, ...(boards || [])]
  });

  return board;
}

export async function createSource(boardId, sourceData) {
  const boards = await loadBoards();
  const board = boards.find(board => board.id === boardId);
  const source = {
    id: uuid.v4(),
    ...sourceData
  }

  if (board) {
    board.sources = [...(board.sources || []), source];

    await saveLocalData({
      boards
    });

    return source;
  }

  throw 'Board not found';
}
