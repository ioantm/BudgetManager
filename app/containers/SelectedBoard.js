import React from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board'
import * as reducers from '../reducers';

const mapStateToProps = (state) => {
	let board = reducers.getSelectedBoard(state);
	
	if (board) {
		board = board.update(
			'sources', 
			(sources) => sources.map(sourceId => reducers.getSource(state, sourceId))
		);
	}

  return {
    board: board
  }
};
export default connect(mapStateToProps)(Board);
