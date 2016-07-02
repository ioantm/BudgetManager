import React , { Component, PropTypes } from 'react'
import {
  View,
  Text
} from 'react-native'

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('board', this.props.board);
    const { board } = this.props;
    const id = board && board.get('id');
    return (
      <View>
        <Text>Board Id: {id}</Text>
      </View>
    )
  }
}

Board.propTypes = {
  board: PropTypes.object
}
