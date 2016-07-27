import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import SelectedBoard from './SelectedBoard'
import {
  Text,
  View
} from 'react-native';

class BudgetApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.loadBoards())
      .then((r) => {
        dispatch(actions.selectFirstBoard())
      });
  }

  render() {
    return (
      <SelectedBoard/>
    );
  }
}

export default connect()(BudgetApp);
