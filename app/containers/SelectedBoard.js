import React from 'react'
import { connect } from 'react-redux'
import Board from '../components/Board'
import { getSelectedBoard } from '../reducers';

const mapStateToProps = (state) => {
  return {
    board: getSelectedBoard(state)
  }
};
export default connect(mapStateToProps)(Board);
