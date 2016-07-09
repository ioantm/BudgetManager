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

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  renderSources() {
    const { board } = this.props;
    const sources = this.props.board.get('sources');

    return sources.map(source => {
      return <BoardElement key={source.get('id')}/>
    });
  }

  render() {
    const { board } = this.props;
    return (
      <View style={styles.container}>
        <BoardElement/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  element: {
    left: 50,
    top: 300,
    position: 'absolute'
  }
})

Board.propTypes = {
  board: PropTypes.object
}
