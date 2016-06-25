import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './app/store/configureStore'
import * as actions from './app/actions'
import { fromJS } from 'immutable'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import appState from './fixture-data';

//const immutableState = fromJS(appState);
const store = configureStore();


store.dispatch(actions.loadBoards());


class BudgetManager extends Component {

  render() {
    //console.log('store', store.getState());
    return <View></View>

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BudgetManager', () => BudgetManager);
