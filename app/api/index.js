import { AsyncStorage } from 'react-native'
import uuid from 'uuid';

//AsyncStorage.clear();

const STORAGE_KEY = '@boards_key_for_user';

async function getLocalData() {
  return JSON.parse(await AsyncStorage.getItem(STORAGE_KEY));
}

async function saveLocalData(data) {
  try {
    return await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
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

export async function createSource(boardId, source) {
  const boards = await loadBoards();
  const board = boards.find(board => board.id === boardId);

  if (board) {
    board.sources = [...(board.sources || []), source];

    await saveLocalData({
      boards
    });

    return source;
  }

  throw 'Board not found';
}

export async function updateSource(boardId, sourceId, sourceData) {
  const boards = await loadBoards();
  const board = boards.find(board => board.id === boardId);
  const source = board && board.sources.find(source => source.id === sourceId);
  console.log('sourceData', sourceData);
  if (source) {
    Object.assign(source, sourceData);
    console.log('board', board);
    await saveLocalData({
      boards
    });

    return source;
  }

  throw 'Source or board not found';
}
