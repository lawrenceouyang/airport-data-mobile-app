/**
 * Created by Kevin Lloyd Macayan on 8/04/2017.
 */
import React from 'react';
import { FlatList, Text, Image, View } from 'react-native';

import CheckpointCard from '../../Components/Checkpoints/CheckpointCard';

export default class CheckpointResults extends React.Component {
  constructor(props) {
    super(props);

    // console.tron.log(this.props.checkpointRedux);
    this.state = {
      checkpointList: this.props.checkpointRedux.data,
    };
  }

  componentDidMount() {
    this.props.loadCheckpoints();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checkpointList: nextProps.checkpointList });
  }

  render() {
    const { navigate } = this.props.navigation;
    let { checkpointRedux, getAllCheckpoints, getCheckpoint, navigation } = this.props;

    return (


      <View style={{ paddingBottom: 20 }}>

        {/*Checkpoint Result List*/}
        <FlatList
          data={checkpointRedux.data === [] ? [] : this.props.checkpointList}
          refreshing={checkpointRedux.fetching}
          extraData={checkpointRedux.data}
          renderItem={({ item }) => {
              return (
               <CheckpointCard onPress={() => navigate('Checkpoint', { navigation: navigate, item: item })}
               item={item}
               getCheckpoint={getCheckpoint}
               />
              );
            }
          }
        />
      </View>
    );
  }
}
