/**
 * Created by alex.vincent on 7/27/2017.
 */
import React, { PropTypes } from 'react';
import { Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';
import Colors from '../../Themes/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import FilterButton from '../Misc/Buttons/FilterButton';

export default class FilterBanner extends React.Component {
  constructor(props) {
    super(props);

    // Set the initial selected filters (defaults to filterCriteria at index 0)
    let { filters } = this.props;
    let newSelected = [];
    for (let filter in filters) {
      newSelected.push(filters[0].filters[0].filterCriteria);
    }

    // selected - Array whose indicies correspond to filter rows
    // and values correspond to selected filterCriteria
    this.state = {
      selected: [...newSelected],
    };
  }

  static propTypes = {
    onPress: PropTypes.func,
    filters: PropTypes.array,
    handleFilter: PropTypes.func,
  };

  triggerFilter(filterKey, filterCriteria, index) {

    // Make a copy of the array and modify the selected filter by index
    // Then update the state of the selected values
    let selectedState = [...this.state.selected];
    selectedState[index] = filterCriteria;
    this.setState({ selected: [...selectedState] });

    // Then tell the ListView to update itself
    this.props.handleFilter(filterKey, filterCriteria);
  }

  render() {
    let { selected } = this.state;
    let { filters } = this.props;

    return (
      <View>

        {/*TODO - Be a better programmer and do some better dynamic height scaling on the main View*/}
        <View style={{ backgroundColor: Colors.filterBannerColor, height: (selected.length * 50) }}>

          {/*Generic Filter Row*/}
          {filters.map((filterItem, index) =>
            <View key={index} style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 10 }}>

              {/*Filter Icon for row*/}
              <Icon
                style={{ flex: 0, alignSelf: 'center', paddingRight: 15 }}
                name={filterItem.icon}
                size={25}
                color="white"
              />

              {/*Generic scroll view to host a list of filter buttons*/}
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: 'row', alignSelf: 'center', paddingRight: 10 }}
              >

                {/*Generic Row of Filter Buttons*/}
                {/*A button whose filterCriteria is selected will have the selected styling applied*/}
                {filterItem.filters.map((filter) =>
                <FilterButton
                  selected={selected[index] === filter.filterCriteria}
                  text={filter.filterAlias}
                  key={filter.filterCriteria}
                  onPress={() => this.triggerFilter(filter.filterKey, filter.filterCriteria, index)}
                />
                )}

              </ScrollView>
            </View>
          )}


        </View>
      </View>
    );
  }
}
