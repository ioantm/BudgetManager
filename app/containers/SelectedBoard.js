import React from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board'
import * as reducers from '../reducers'
import * as actions from '../actions'

import {
	View,
	Text
} from 'react-native';

const SelectedBoard = ({ board, ...rest }) => {
	if (board) {
		return <Board board={board} {...rest}/>
	} else {
		return (
			<View>
				<Text>Loading boards</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	let board = reducers.getSelectedBoard(state);

	if (board && board.get('sources')) {
		board = board.update(
			'sources',
			(sources) => sources.map(sourceId => reducers.getSource(state, sourceId))
		);
	}

  return {
    board: board
  }
};

const mapDispathcToProps = (dispatch) => {
	return {
		createSource: (boardId, source) => dispatch(actions.createSource(boardId, source)),
		updateSource: (boardId, sourceId, sourceProps) => dispatch(actions.updateSource(boardId, sourceId, sourceProps)),
		selectElement: (boardId, id) => dispatch(actions.selectElement(boardId, id))
	}
}
export default connect(mapStateToProps, mapDispathcToProps)(SelectedBoard);
