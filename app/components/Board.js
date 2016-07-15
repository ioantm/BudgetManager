import React , { Component, PropTypes } from 'react'
import BoardElement from './BoardElement'
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

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderSources() {
    const { board } = this.props;
    const sources = this.props.board.get('sources');

    return sources.map(source => {
      return <BoardElement key={source.get('id')}/>
    });
  }

  componentWillMount() {
    this._panRensponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: this._handlePanResponderGrant.bind(this)
    });
  }

  render() {
    const { board } = this.props;

    return (
      <View style={styles.container} {...this._panRensponder.panHandlers}>
        <BoardElement style={styles.element}/>
        {
          this.state.pendingSource && 
            <BoardElement key={this.state.pendingSource.id} {...this.state.pendingSource}></BoardElement>
        }
      </View>
    )
  }

  _handlePanResponderGrant(e, gestureState) {
    console.log('_handlePanResponderGrant', gestureState);
    this.setState({ pendingSource: {
      id: pendingSourceId++,
      style: [ 
        styles.element, 
        { 
          left: gestureState.x0, 
          top: gestureState.y0,
          transform: [{ translateX: 0 }, { translateY: 0 }, { scale: 0 }]
        }
      ]
    }})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  element: {
    position: 'absolute',
    left: 0,
    top: 30
  }
})

Board.propTypes = {
  board: PropTypes.object
}
