import React, { Component, PropTypes } from 'react'
import DraggableView from './DraggableView'
import AnimatedScale from './AnimatedScale'
import { Map } from 'immutable'
import numeral from 'numeral'
import {
	StyleSheet,
	View,
	Text,
	Animated
} from 'react-native'

class BoardElement extends Component {
	constructor(props) {
    super(props);
  }

	setNativeProps(nativeProps) {
		this._viewRef.setNativeProps(nativeProps);
	}

	render() {
		const {
			style,
			...restProps,
			scale,
			animatedPos,
			viewPosition,
			value,
			children
		} = this.props;
		console.log("children", children);
		return (
			<View>
				<Animated.View
				ref={(comp) => this._viewRef = comp}
				{...restProps}
				style={[
						styles.circle,
						style,
						{ transform:
							[
								{ translateX: viewPosition.get('x') }, { translateY: viewPosition.get('y') },
								{ scale }
							]
						}
					]}>
					</Animated.View>
					<View style={{alignItems: 'center', flex: 1}}>
						<Text> {numeral(value).format('$0,0.0')} </Text>
					</View>
			</View>
		);
	}
}

BoardElement.propTypes = {
	scale: PropTypes.object.isRequired,
	viewPosition: PropTypes.object.isRequired
}

BoardElement.defaultProps = {
	scale: 0,
	viewPosition: Map({ x: 0, y: 0})
}

export default BoardElement;

const styles = {
	container: {

	},
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
