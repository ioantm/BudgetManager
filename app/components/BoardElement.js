import React, { Component, PropTypes } from 'react';
import DraggableView from './DraggableView';
import AnimatedScale from './AnimatedScale';
import {
	StyleSheet,
	View,
	Animated
} from 'react-native'

class BoardElement extends Component {
	constructor(props) {
    super(props);
  }

	render() {
		const {
			style,
			...restProps,
			scaleValue,
			animatedPos,
			viewPosition
		} = this.props;

		//console.log(' viewPosition ', viewPosition)
		return (
			<Animated.View
				ref={(comp) => this._viewRef = comp}
				{...restProps}
				style={[
						style,
						styles.circle,
						{ transform: [{ translateX: viewPosition.x }, { translateY: viewPosition.y }, { scale: scaleValue }] }
					]}/>
		);
	}
}

BoardElement.propTypes = {
	scaleValue: PropTypes.object.isRequired,
	viewPosition: PropTypes.object.isRequired
}

export default AnimatedScale(DraggableView(BoardElement));

const styles = {
	circle: {
		width: 50,
		height: 50,
		position: 'absolute',
		left: 0,
		top: 0,
		borderRadius: 50/2,
		backgroundColor: 'black'
	}
};
