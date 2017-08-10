/**
 * Created by kvillalobos on 7/21/2017.
 */
import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import ExamplesRegistry from '../../Services/ExamplesRegistry';
import styles from '../Styles/CardStyles';

ExamplesRegistry.addComponentExample('Checkpoint Card ', () =>
  <CheckpointCard number="10" subtitle="Terminal 1 - F1" time="Updated - 12:21 PM" />,
);

export default class CheckpointCard extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    onPress: PropTypes.func,
    getCheckpoint: PropTypes.func,
    children: PropTypes.func,
    navigator: PropTypes.string,
    subtitle: PropTypes.string,
    number: PropTypes.string,
    time: PropTypes.string,
  };

  componentDidMount() {
    // console.tron.log(this.props.getCheckpoint);
    this.props.getCheckpoint(this.props.item.checkpoint_uuid);
  }

  render() {

    let { item, onPress } = this.props;

    return (
      <TouchableOpacity style={[styles.container, styles.card]} onPress={onPress}>
        <View style={{ flexDirection: 'row', flex: 1}}>
          <View style={{ flexDirection: 'column' }}>

            {/*Terminal Location*/}
            <Text style={styles.subtitleText}>Terminal {item.terminal_id}</Text>

            {/*Name of Checkpoint*/}
            <Text style={styles.numberText}>{item.checkpoint_name}</Text>

            {/*Hours of Operation*/}
            <Text style={styles.subtitleText}>{item.checkpoint_hours}</Text>

          </View>

          {/*In Progress - Availability of Checkpoint*/}
          <View style={{ flexDirection: 'column', alignSelf: 'center', flex: 1 }} >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={ styles.subtitleBottomTextPositive}>OPEN</Text>
            </View>


          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
