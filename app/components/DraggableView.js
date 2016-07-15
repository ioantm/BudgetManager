import React, { Component } from 'react'
import {
	PanResponder,
	Animated,
	View
} from 'react-native'


export default class DraggableView extends Component {
	constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
  	console.log('componentWillReceiveProps', nextProps);
  }

	componentWillMount() {
		this._value = { x: 0, y: 0 };
		this._animatedValue = new Animated.ValueXY();
		this._animatedValue.addListener((value) => {console.log(value); this._value = value;});
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetResponderCapture: () => true,
			onMoveShouldSetPanResponderCapture: () => true,
			onPanResponderGrant: (e, gestureState) => {
				this._animatedValue.setOffset({ x: this._value.x, y: this._value.y });
				this._animatedValue.setValue({ x: 0, y: 0 });

			},
			onPanResponderMove: Animated.event([null, { dx: this._animatedValue.x, dy: this._animatedValue.y }]),
			onPanResponderRelease: () => this._animatedValue.flattenOffset()
		});
	}

	render() {
		console.log('this.props.style.transform', this.props.style.transform);
		return (
			<Animated.View style={
					[
						this.props.style,
						{ transform: [{ translateX: this._animatedValue.x }, { translateY: this._animatedValue.y }] }
					]
				}
				{...this._panResponder.panHandlers}/>
		)
	}
}
