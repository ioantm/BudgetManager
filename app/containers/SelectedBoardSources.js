import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as reducers from '../reducers'
import * as actions from '../actions'
import SourcesList from '../components/SourcesList'


const mapStateToProps = (state) => {
  const board = reducers.getSelectedBoard(state);
  const boardSources = board && board.get('sources');
  return {
    sources: boardSources && boardSources.map(sourceId => reducers.getSource(state, sourceId)),
    board
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  	updateSource: actions.updateSource,
    selectElement: actions.selectElement
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SourcesList)
