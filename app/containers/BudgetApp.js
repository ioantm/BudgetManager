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
      .then(() => {
        dispatch(actions.selectBoard('11f302ff-0aa1-4f48-9458-84258b688c53'))
      });
  }

  render() {
    return (
      <SelectedBoard/>
    );
  }
}

export default connect()(BudgetApp);
