import React, { Component } from 'react';
import DraggableView from './DraggableView';

import {
	StyleSheet,
	View
} from 'react-native'

export default class BoardElement extends Component {
	constructor(props) {
    super(props);
  }

	render() {
		return (
			<DraggableView style={[this.props.style, styles.circle]}/>
		);
	}
}

const styles = {
	circle: {
		width: 50,
		height: 50,
		borderRadius: 50/2,
		backgroundColor: 'black'
	}
};