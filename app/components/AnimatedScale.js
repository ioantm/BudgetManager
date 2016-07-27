import React, { Component, PropTypes } from 'react'
import {
	PanResponder,
	Animated,
	View,
  TouchableWithoutFeedback
} from 'react-native'

const MIN_BUDGET = 0;
const MAX_BUDGET = 99999;

const AnimatedScale = (InnerComponent) => {
	class AnimatedScaleView extends Component {
	  constructor(props) {
	    super(props);
	    this._animatedValue = new Animated.Value(props.value || 0);
	  }

	  startScale(from) {
	    this._animatedValue.setValue(from);
	    setTimeout(() => {
	      Animated.timing(this._animatedValue, {
	        toValue: MAX_BUDGET,
	        duration: 3000
	      }).start();
	    });
	  }

		componentDidMount() {
			if (this.props.startScaleOnCreate) {
				this.startScale(0);
			}
		}

	  stopScale() {
	    this._animatedValue.stopAnimation();
			return this._animatedValue._value;
	  }

	  render() {
	    const scaleValue = this._animatedValue.interpolate({
	      inputRange: [MIN_BUDGET, MAX_BUDGET],
	      outputRange: [0.15, 1]
	    })
			const {
				startScaleOnCreate, value, ...rest
			}  = this.props;

	    return (
	      <InnerComponent
					{...rest}
					scaleValue={scaleValue}/>
	    );
	  }
	}

	AnimatedScaleView.propTypes = {
			startScaleOnCreate: PropTypes.bool.isRequired,
			value: PropTypes.number.isRequired
	}

	AnimatedScaleView.defaultProps = {
		startScaleOnCreate: false,
		value: 0
	}

	return AnimatedScaleView;

}
export default AnimatedScale;
