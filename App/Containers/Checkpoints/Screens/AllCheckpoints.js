/**
 * Created by Kevin Lloyd Macayan on 9/3/2017.
 */
import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

import CheckpointFilterBanner from '../../../Components/Misc/FilterBanner';
import CheckpointResults from '../../Checkpoints/CheckpointResults';
import CheckpointCard from '../../../Components/Checkpoints/CheckpointCard';
import FilterBanner from '../../../Components/Misc/FilterBanner';
import CheckpointActions from '../../../Redux/CheckpointRedux'

import { filterTransform } from "../../../Transforms/SubsetTransforms";

import { connect } from 'react-redux';

class AllCheckpoints extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkpointList: [],
    };
  }

  static navigationOptions = {
    title: 'Checkpoint Wait Time',
    headerStyle: {
      backgroundColor: "#033C56"
    }
  };

  componentDidMount() {
    let { getAllCheckpoints, getCheckpoints, checkpointRedux } = this.props;

    getAllCheckpoints();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checkpointRedux.data !== this.state.checkpointList)
      this.setState({ checkpointList: nextProps.checkpointRedux.data });
  }

  loadCheckpoints (filterKey='terminal_id', filterCriteria='1') {
    const { checkpointRedux } = this.props;

    if (filterCriteria === '1') {
      //console.tron.log(checkpointRedux.data);
      this.setState({ checkpointList: checkpointRedux.data });
      // return checkpointRedux.data;
    } else {
      //console.tron.log(filterTransform(checkpointRedux.data, filterKey, filterCriteria));
      this.setState({ checkpointList: filterTransform(checkpointRedux.data, filterKey, filterCriteria) });
      // return filterTransform(checkpointRedux.data, filterKey, filterCriteria);
    }
  }

  render () {

    const { navigate } = this.props.navigation;

    let { checkpointRedux, getAllCheckpoints, getCheckpoint, navigation } = this.props;

    const checkpointFilterItems = [
      { icon: 'building-o',
        filters: [
          {
            filterKey: 'terminal_id',
            filterCriteria: '1',
            filterAlias: 'Terminal 1'
          },
          {
            filterKey: 'terminal_id',
            filterCriteria: '2',
            filterAlias: 'Terminal 2'
          },
          {
            filterKey: 'terminal_id',
            filterCriteria: '3',
            filterAlias: 'Terminal 3'
          },
          {
            filterKey: 'terminal_id',
            filterCriteria: '4',
            filterAlias: "Int'l Terminal"
          }
        ],
      }
    ];

    return (
      <View>

        {/*Main Content*/}
        <ScrollView>

          {/*<CheckpointFilterBanner/>*/}
{/*          <CheckpointCard
            current_processing_rate="20"
            terminal_name="Terminal 1"
            checkpoint_name="Checkpoint F1"
            updated_time="12:21 AM"
            onPress={() => navigate('Checkpoint')}/>*/}

          {/*Checkpoint List Banner*/}
          <FilterBanner filters={checkpointFilterItems} />

          <CheckpointResults
            checkpointRedux={checkpointRedux}
            getAllCheckpoints={getAllCheckpoints}
            checkpointList={this.state.checkpointList}
            getCheckpoint={getCheckpoint}
            loadCheckpoints={this.loadCheckpoints.bind(this)}

            navigation={navigation}
            navigationRedux={this.props.navigationRedux}
          />

        </ScrollView>
      </View>

    );
  }
}


const mapStateToProps = state => {
  return {
    checkpointRedux: state.checkpoint,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCheckpoints: () => dispatch(CheckpointActions.checkpointRequest()),
    getCheckpoint: (checkpointUuid) => dispatch(CheckpointActions.checkpointWaitTimeRequest(checkpointUuid)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCheckpoints);
