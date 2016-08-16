import React, { Component, PropTypes } from 'react';
import DraggableView from './DraggableView';
import AnimatedScale from './AnimatedScale';
import { Map } from 'immutable';
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

		console.log(' viewPosition ', viewPosition)
		return (
			<Animated.View
				ref={(comp) => this._viewRef = comp}
				{...restProps}
				style={[
						styles.circle,
						style,
						{ transform:
							[
								viewPosition && { translateX: viewPosition.get('x') }, { translateY: viewPosition.get('y') },
								{ scale: scaleValue }
							] }
					]}/>
		);
	}
}

BoardElement.propTypes = {
	scaleValue: PropTypes.object.isRequired,
	viewPosition: PropTypes.object.isRequired
}

BoardElement.defaultProps = {
	scaleValue: 0,
	viewPosition: Map({ x: 0, y: 0})
}

export default BoardElement;

const styles = {
	circle: {
		width: 100,
		height: 100,
		position: 'absolute',
		left: 0,
		top: 0,
		borderRadius: 100/2,
		backgroundColor: 'black'
	}
};
