import React, { Component, PropTypes } from 'react'
import Source from './Source'
import AddSource from '../containers/AddSource'
import {
  View,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native'

import { List } from 'immutable'

class SourcesList extends Component {
  render() {
    const { sources } = this.props;

    return (
      <View>
        <ScrollView
          style={styles.scroller}
          horizontal={true}>
          <View style={styles.sourceContainer}>
            {
              sources.map(source =>
                <Source key={source.get('id')}
                    source={source}/>
              )
            }
            <AddSource></AddSource>
          </View>
        </ScrollView>
      </View>
    )
  }
}

SourcesList.propTypes = {
  sources: React.PropTypes.instanceOf(List).isRequired,
  updateSource: PropTypes.func.isRequired,
  selectElement: PropTypes.func.isRequired
}

SourcesList.defaultProps = {
  sources: List()
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: '#D7D7D7',
  },
  sourceContainer: {
    flexDirection: 'row'
  }
})

export default SourcesList;
