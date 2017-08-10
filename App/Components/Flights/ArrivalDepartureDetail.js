/**
 * Created by Daniel Martin on 7/10/2017.
 */
import React from 'react';
import moment from 'moment';
import { ScrollView, Text, Image, View } from 'react-native';
import styles from '../Styles/FlightDetailStyles';

import { Images } from '../../Themes';

// Styles

export default class FlightProfile extends React.Component {
    static navigationOptions = {
        title: 'Flight Profile',
        headerStyle: {
            backgroundColor: '#033C56',
        },
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
        let {flight_type, gate, terminal_id, terminal, baggage_claim, sched_time, est_time} = this.props.item;
        let {mainContainer, container, panelTitle, panelItems, mainPanel, negativeStatus, positiveStatus, panelSubtitle, scheduledTime} = styles;


    return (
      <View>
        {/*Main Content*/}
        <View style={container}>
          {/*Flight Details*/}
          <Text style={panelTitle} key={flight_type}>
            {flight_type === 'A' ? 'Arrival' : 'Departure'} Details
          </Text>

          {/* Main Box */}
          <View style={mainPanel}>

              {/* First Column*/}
              <View style={panelItems}>
                  {/* Airline */}
                  <View style={{ flexDirection: 'column' }}>
                      <Text style={panelSubtitle} key={flight_type}>
                          {flight_type === 'A' ? 'Arrival' : 'Departure'} Time
                      </Text>
                      <Text style={this.isDelayed()==="DELAYED" ? negativeStatus: positiveStatus} key={est_time}>
                          {this.isDelayed() ==="DELAYED" ? "Delayed: "+ est_time: est_time }
                      </Text>
                      <Text style={scheduledTime}>
                          {this.isDelayed()==="DELAYED" ? "Scheduled: " + sched_time : ""}
                      </Text>
                  </View>

                  {/*From*/}
                  <View style={{ flexDirection: 'column' }}>
                      <Text style={panelSubtitle}>Gate</Text>
                      <Text key={gate}>
                          {gate !== null ? gate : 'Not available'}
                      </Text>
                  </View>

              </View>
              {/*End of First Column*/}


              {/* Second Column*/}
              <View style={panelItems}>

                {/* Flight $ */}
                <View style={{ flexDirection: 'column' }}>
                  <Text style={panelSubtitle}>
                    {flight_type === 'A' ? 'Arriving' : 'Departing'} Terminal
                  </Text>
                  <Text key={terminal}>
                    { terminal_id === 4 ? "Int'l Terminal" : terminal_id}
                  </Text>
                </View>



                {/*To*/}
                <View style={{ flexDirection: 'column' }}>
                    <Text style={panelSubtitle}>Baggage Claim</Text>
                    <Text>
                        { baggage_claim != null ? baggage_claim : 'Not available'}
                    </Text>
                </View>

              </View>
              {/*End of Second Column*/}

              {/* End of Main Box*/}
          </View>

        </View>
      </View>
    );
  }

}
