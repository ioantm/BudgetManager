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
			if (this.props.scaling) {
				this.startScale(0);
			}
		}

		componentWillReceiveProps({ scaling, scaleEnd }) {
			if (scaling !== this.props.scaling) {
				if (scaling === true) {
					this.startScale();
				} else if (scaling === false){
					this.stopScale();
				}
			}
		}

	  stopScale() {
	    this._animatedValue.stopAnimation();
			this.props.scaleEnd(this._animatedValue._value);
	  }

	  render() {
	    const scaleValue = this._animatedValue.interpolate({
	      inputRange: [MIN_BUDGET, MAX_BUDGET],
	      outputRange: [0.15, 1]
	    })
			const {
				scaling, value, ...rest
			}  = this.props;

	    return (
	      <InnerComponent
					{...rest}
					scaleValue={scaleValue}/>
	    );
	  }
	}

	AnimatedScaleView.propTypes = {
			scaling: PropTypes.bool.isRequired,
			scaleEnd: PropTypes.func,
			value: PropTypes.number.isRequired
	}

	AnimatedScaleView.defaultProps = {
		scaling: false,
		value: 0
	}

	return AnimatedScaleView;

}
export default AnimatedScale;
