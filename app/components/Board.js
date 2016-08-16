import React , { Component, PropTypes } from 'react'
import BoardElement from './BoardElement'
import DraggableView from './DraggableView'
import Source from './Source'
import SelectedBoardSources from '../containers/SelectedBoardSources'
import { Map } from 'immutable'

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
      // <View style={styles.container} {...this._panRensponder.panHandlers}>
      //   {
      //     this.renderSources()
      //   }
      //   {
      //     this.state.pendingSource &&
      //       <Source
      //         ref={(el) => {this.pendingSourceComp = el; console.log('set ref', el)}}
      //         scaleEnd={this.scaleEnd}
      //         scaling={this.state.scaling}
      //         source={this.state.pendingSource}
      //         key={'pendingSource'}/>
      //   }
      // </View>
      <SelectedBoardSources/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
