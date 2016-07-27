import React, { Component, PropTypes } from 'react'
import {
	PanResponder,
	Animated,
	View
} from 'react-native'


export default function(InnerView) {
  class DraggableView extends Component {
  	constructor(props) {
      super(props);
    }

  	componentWillMount() {

      let { viewPosition: position, onDragEnd, onTap } = this.props;
      position = position.toJS();

  		this._value = position;
  		this._animatedValue = new Animated.ValueXY();
      this._animatedValue.setValue(position);
  		this._animatedValue.addListener((value) => { this._value = value;});
  		this._panResponder = PanResponder.create({
  			onStartShouldSetPanResponder: () => true,
  			onMoveShouldSetResponderCapture: () => true,
  			onMoveShouldSetPanResponderCapture: () => true,
  			onPanResponderGrant: (e, gestureState) => {

					onTap();
  				this._animatedValue.setOffset({ x: this._value.x, y: this._value.y });
  				//this._animatedValue.setValue({ x: 0, y: 0 });
          console.log('start drag');
  			},
  			onPanResponderMove: Animated.event([null, { dx: this._animatedValue.x, dy: this._animatedValue.y }]),
  			onPanResponderRelease: () => {
          this._animatedValue.flattenOffset();
          console.log('on drag end');
          onDragEnd(this._animatedValue.x, this._animatedValue.y);
        }
  		});
  	}

  	render() {
      console.log('render');
      const {
        viewPosition,
        onDragEnd,
        ...rest
      } = this.props;

  		return (
  			<InnerView
        {...rest}
        viewPosition={ this._animatedValue }
        {...this._panResponder.panHandlers}/>
  		)
  	}
  }
  DraggableView.propTypes = {
    viewPosition: PropTypes.object.isRequired,
    onDragEnd: PropTypes.func.isRequired,
		onTap: PropTypes.func.isRequired
  }

  DraggableView.defaultProps = {
    onDragEnd: () => console.log('DraggableView on drag end default'),
		onTap: () => console.log('DraggableView on tap default')
  }

  return DraggableView;
}
