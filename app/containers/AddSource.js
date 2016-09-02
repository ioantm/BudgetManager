import React, { PropTypes, Component } from 'react'
import * as reducers from '../reducers'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import Source from '../components/Source'
import { fromJS } from 'immutable'
import {
	View,
	Text,
	StyleSheet,
  PanResponder
} from 'react-native'

class AddSource extends Component {
	constructor(props) {
    super(props);
    this.state = {
      scaling: false
    };
    this.scaleEnd = this.scaleEnd.bind(this);
    this._handlePanResponderGrant = this._handlePanResponderGrant.bind(this);
    this._handlePanResponderEnd = this._handlePanResponderEnd.bind(this);
  }

	componentWillMount() {
    this._panRensponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderTerminate: this._handlePanResponderEnd,
      onPanResponderRelease: this._handlePanResponderEnd
    });

    console.log('_panRensponder', this._panRensponder.panHandlers);
  }

	render() {
		return (
      <View {...this._panRensponder.panHandlers} style={{width: 100, height: 100 }}>
        {
          <AddButton>
            {
              this.state.pendingSource &&
              <Source
                scaleEnd={this.scaleEnd}
                scaling={this.state.scaling}
                source={this.state.pendingSource}
                key={'pendingSource'}/>
            }
          </AddButton>
        }
      </View>
    )

	}

	scaleEnd(value) {
    const { createSource, board } = this.props;

    createSource(board.get('id'),
      {
        value,
        viewPosition: {
          x: this.releasePosition.x - 50,
          y: this.releasePosition.y - 50
        }
      }
    ).then((response) => {
      this.setState({ pendingSource: null });
    });
  }

  _handlePanResponderGrant(e, gestureState) {
    this.setState({
      pendingSource: fromJS(
        {
          viewPosition: {
            x: gestureState.x0 - 50,
            y: gestureState.y0 - 50,
          },
          value: 0,
        }
      ),
      scaling: true
    })
  }

  _handlePanResponderEnd(e, gestureState) {
     console.log('onPanResponderRelease');
      this.releasePosition = {
        x: gestureState.x0,
        y: gestureState.y0
      };
      this.setState({ scaling: false });
  }
}

AddSource.propTypes = {
	board: PropTypes.object.isRequired,
  createSource: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	const board = reducers.getSelectedBoard(state);

	return {
		board
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		createSource: actions.createSource
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSource);
