import React, { Component } from 'react'
import BoardElement from './BoardElement'
import AnimatedScale from './AnimatedScale'
import {
  StyleSheet
}  from 'react-native'

const ScallableElement = AnimatedScale(BoardElement);

class Source extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { source, ...rest } = this.props;

    return (
      <ScallableElement
        style={styles.source}
        value={source.get('value')}
        {...rest}/>
    )
  }
}

const styles = StyleSheet.create({
  source: {
    backgroundColor: '#29CE42',
    position: 'relative'
  }
})

export default Source;
