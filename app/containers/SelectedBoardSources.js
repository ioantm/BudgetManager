import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as reducers from '../reducers'
import * as actions from '../actions'
import SourcesList from '../components/SourcesList'

const mapStateToProps = (state) => {
  const board = reducers.getSelectedBoard(state);

  return {
    sources: board && board.get('sources').map(sourceId => reducers.getSource(state, sourceId))
  }
}

const mapDispatchToProps = (dispatch) => {
  const board = reducers.getSelectedBoard(state);
  const boardId = board.get('id');
  return {
  	createSource: (source) => dispatch(actions.createSource(boardId, source)),
  	updateSource: (sourceId, sourceProps) => dispatch(actions.updateSource(boardId, sourceId, sourceProps)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SourcesList)
