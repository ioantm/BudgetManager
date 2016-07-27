import React , { Component, PropTypes } from 'react'
import BoardElement from './BoardElement'
import DraggableView from './DraggableView'
import Source from './Source'
import { Map } from 'immutable'

import {
  View,
  Text,
  Animated,
  StyleSheet,
  PanResponder,
  Dimensions
} from 'react-native'

let {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get('window');

let pendingSourceId = 0;

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderSources() {
    const { board, updateSource, selectElement } = this.props;
    const sources = board.get('sources');

    return sources && sources.map(source => {
      return (
        <Source key={source.get('id')}
            onDragEnd={(x, y) =>
              updateSource(board.get('id'), source.get('id'), { viewPosition: { x, y } })
            }
            onTap={() => selectElement(board.get('id'), source.get('id'))}
            source={source}/>
      )
    });
  }

  componentWillMount() {
    const { stopScale, createSource, selectElement } = this.props;

    this._panRensponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: this._handlePanResponderGrant.bind(this),
      onPanResponderRelease: (e, gestureState) => {
        const { board } = this.props;
        const value = this.pendingSource.stopScale();

        createSource(board.get('id'), {
          value,
          viewPosition: {
            x: gestureState.x0 - 25,
            y: gestureState.y0 - 25
          }
        }).then((response) => {
          selectElement(board.get('id'), response.id);
          this.setState({ pendingSource: null });
        });
      }
    });
  }

  render() {
    const { board, updateSource } = this.props;

    return (
      <View style={styles.container} {...this._panRensponder.panHandlers}>
        {
          this.renderSources()
        }
        {
          this.state.pendingSource &&
            <BoardElement
              ref={(el) => this.pendingSource = el}
              key={this.state.pendingSource.id}
              {...this.state.pendingSource}/>
        }
      </View>
    )
  }

  _handlePanResponderGrant(e, gestureState) {
    this.setState({ pendingSource: {
      id: pendingSourceId++,
      startScaleOnCreate: true,
      viewPosition: Map({
        x: gestureState.x0 - 25,
        y: gestureState.y0 - 25,
      })
    }})
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
  createSource: PropTypes.func.isRequired,
  updateSource: PropTypes.func.isRequired,
  selectElement: PropTypes.func.isRequired
}

Board.defaultProps = {
  board: Map(),
  createSource: () => console.log('createSource default'),
  updateSource: () => console.log('updateSource default'),
  selectElement: () => console.log('selectElement default')
}

export default Board;
