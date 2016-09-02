import React , { Component, PropTypes } from 'react'
import BoardElement from './BoardElement'
import DraggableView from './DraggableView'
import Source from './Source'
import SelectedBoardSources from '../containers/SelectedBoardSources'
import { Map } from 'immutable'
import PrecisionSlider from '../components/PrecisionSlider'

import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions
} from 'react-native'

let {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get('window');

let pendingSourceId = 0;

class Board extends Component {
  render() {
    const { board, updateSource } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.boardView}></View>
        <SelectedBoardSources/>
        <PrecisionSlider/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  boardView: {
    flex: 1
  },
  container: {
    flexDirection: 'column',
    flex: 1
  }
})

Board.propTypes = {
  board: PropTypes.object.isRequired,
  selectElement: PropTypes.func.isRequired
}

Board.defaultProps = {
  board: Map(),
  selectElement: () => console.log('selectElement default')
}

export default Board;
