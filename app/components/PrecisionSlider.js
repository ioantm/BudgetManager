import React , { Component, PropTypes } from 'react'

import { Slider, StyleSheet } from 'react-native'

export default class PrecisionSlider extends Component {
  render() {
    return <Slider style={styles.slider} {...this.props}></Slider>
  }
}

const styles = StyleSheet.create({
  slider: {
    width: 200,
    transform: [{ rotate: '90deg'}]
    position: 'absolute'
  }
})
