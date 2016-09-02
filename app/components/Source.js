import React, { Component } from 'react'
import BoardElement from './BoardElement'
import AnimatedScale from './AnimatedScale'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View
}  from 'react-native'

const ScallableElement = AnimatedScale(BoardElement);

class Source extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { source, ...rest } = this.props;

    return (
      <TouchableHighlight
        activeOpacity={0.8}
        onPress={() => console.log('press handler')}>
        <View style={styles.wrapper}>
          <ScallableElement
            style={styles.source}
            value={source.get('value') || 0}
            {...rest}>
          </ScallableElement>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  source: {
    backgroundColor: '#29CE42',
    position: 'relative'
  },
  wrapper: {
    backgroundColor: '#D7D7D7'
  }
})

export default Source;
