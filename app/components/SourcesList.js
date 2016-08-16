import React, { Component, PropTypes } from 'react'
import Source from './Source'
import {
  View,
  StyleSheet,
  PanResponder
} from 'react-native'

import { List, fromJS } from 'immutable'

class SourcesList extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.scaleEnd = this.scaleEnd.bind(this);
  }

  componentWillMount() {
    const { stopScale, createSource, selectElement } = this.props;

    this._panRensponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: this._handlePanResponderGrant.bind(this),
      onPanResponderRelease: (e, gestureState) => {
        this.releasePosition = {
          x: gestureState.x0,
          y: gestureState.y0
        };
        this.setState({ scaling: false });
      }
    });
  }

  render() {
    const { sources } = this.props;

    return (
      <View style={styles.sourceContainer}
        {...this._panRensponder.panHandlers}>
        {
          sources.map(source =>
            <Source key={source.get('id')}
                source={source}/>
          )
        }
        {
            this.state.pendingSource &&
            <Source
              ref={(el) => {this.pendingSourceComp = el; console.log('set ref', el)}}
              scaleEnd={this.scaleEnd}
              scaling={this.state.scaling}
              source={this.state.pendingSource}
              key={'pendingSource'}/>
          }
      </View>
    )
  }

  scaleEnd(value) {
    const { createSource, selectElement } = this.props;
    console.log('pendingSource', this.pendingSourceComp, this);

    createSource({
      value,
      viewPosition: {
        x: this.releasePosition.x - 50,
        y: this.releasePosition.y - 50
      }
    }).then((response) => {
      selectElement(response.id);
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
}

SourcesList.propTypes = {
  sources: React.PropTypes.instanceOf(List).isRequired,
  createSource: PropTypes.func.isRequired,
  updateSource: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  sourceContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#D7D7D7'
  }
})

export default SourcesList;
