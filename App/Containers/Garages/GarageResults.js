/**
 * Created by alex.vincent on 8/2/2017.
 */
import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import EmptyPages from '../../Components/Misc/EmptyPages';
import ListHeader from '../../Components/Misc/ListHeader'
import GarageCard from '../../Components/Garages/GarageCard';

import { Images } from '../../Themes';

export default class GarageResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      garageList: this.props.garageRedux.data,
    };
  }

  componentDidMount() {
    this.props.loadGarages();
  }

  _keyExtractor = (item, index) => item.garage_uuid;

  componentWillReceiveProps(nextProps) {
    this.setState({ garageList: nextProps.garageList });
  }

  onRefresh = () => {
    this.props.loadGarages();
  };
  renderEmpty = () => {
    if (!this.props.garageRedux.fetching)
      return <EmptyPages dataType={'search_data'} navigation={this.props.navigation} />;
    return null;
  };

  render() {
    const { navigate } = this.props.navigation;

    const { garageRedux, getAllGarages, getGarage, navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {/* Garage Result List */}
        <FlatList
          data={garageRedux.data === [] ? [] : this.props.garageList}
          ListEmptyComponent={this.renderEmpty}
          ListHeaderComponent={<ListHeader resultCount={garageRedux.data === [] ? 'Loading...' : 'FIXME'}/>}
          refreshing={garageRedux.fetching}
          keyExtractor={this._keyExtractor}
          onRefresh={this.props.loadGarages}
          extraData={garageRedux.data}
          renderItem={({ item }) =>
            <GarageCard
              onPress={() => navigate('GarageProfile', { navigation: navigate, item })}
              item={item}
              getGarage={getGarage}
            />}
        />
      </View>
    );
  }
}
