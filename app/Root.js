import { Provider } from 'react-redux'
import React, { Component } from 'react'
import configureStore from './store/configureStore'
import BudgetApp from './containers/BudgetApp'

export default class Root extends Component {
  constructor(props) {
      super(props);

      this.state = {
        store: configureStore()
      }
  }

  render() {
    return (
      <Provider store={this.state.store}>
          <BudgetApp />
      </Provider>
    )
  }
}
