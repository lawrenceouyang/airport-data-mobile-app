/**
 * Created by alex.vincent on 7/10/2017.
 */
import React, { PropTypes } from 'react';
import moment from 'moment';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import styles from '../Styles/ListItemStyles';
import StarIcon from '../Misc/StarIcon';

export default class FlightListItem extends React.Component {
  static propTypes = {
        item: PropTypes.any,
        starred: PropTypes.bool,
        onPress: PropTypes.func,
        city: PropTypes.string,
        gate: PropTypes.string,
        flight: PropTypes.string,
        time: PropTypes.string,
  };

  isDelayed () {

    let { est_time, sched_time } = this.props.item;

      //Moment is from a the moment.js library
      //Here we create two moment objects that are formatted from a h:mm AM/PM input from the API
      //If the Estimated Time is After the Scheduled Time, the flight is delayed. If not, the flight is on time.
      est_time = moment(est_time, "h:mm A");
      sched_time = moment(sched_time, "h:mm A");
      return est_time.isAfter(sched_time) ? "DELAYED" : "ON-TIME";

    }

  render() {
    let { item } = this.props;
    let {primaryText, flightListItem, listItemImage, negativeStatus, positiveStatus, secondaryText} = styles;

    return (
        <TouchableOpacity style={flightListItem} onPress={this.props.onPress}>
          <View style={{ flex: 1, flexDirection: 'row' }}>

            {/*Airline Logo*/}
            <View style={{ flex: 1 }}>
              <Image resizeMode={'contain'} style={listItemImage} source={{ uri: item.logo }} defaultSource={require('../../Images/sfo_logo.png')} />
            </View>

            {/*Flight # / Time / Gate */}
            <View style={{ flex: 3, flexDirection: 'column', alignSelf: 'center', paddingLeft: 10 }}>
              <Text style={primaryText}>
                {item.base_flight}{' '}
              </Text>
              <Text style={secondaryText} key={String(item.gate)}>
                {item.flight_type === 'A' ? 'Arriving ' : 'Departing '}
                {item.sched_time + ' '}
                {item.gate != null ? ('at Gate ' + item.gate) : '' }
              </Text>
            </View>

            {/*Flight Status / Favorite */}
            <View style={{ flex: 1, flexDirection: 'column', paddingBottom: 5, alignSelf: 'center', alignItems: 'flex-end'}}>
              <TouchableOpacity onPress={this.props.starPress} style={{ paddingRight: 10, paddingBottom: 12, paddingTop: 15}}>
                <Text style={this.isDelayed() === 'DELAYED' ? negativeStatus : positiveStatus} >{this.isDelayed()}</Text>
                <View style={{ alignItems: 'flex-end'}}>
                  <StarIcon starred={this.props.starred} style={{ size: 24 }} />
                </View>
              </TouchableOpacity>
            </View>

          </View>

        </TouchableOpacity>
        );
    }
}
