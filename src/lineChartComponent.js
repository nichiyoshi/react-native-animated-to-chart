import React, { Component } from 'react';
import {
  View, Animated, Text, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts';

const styles = StyleSheet.create({
  contentInset: {
    top: 5,
    bottom: 5,
  },
});

class LineChartComponent extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    yMax: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.array = [];
  }

  render() {
    const { value, yMax } = this.props;
    this.array.push(value);

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <Text style={{ textAlign: 'left', alignSelf: 'stretch' }}>y axis: value</Text>
        <View style={{ height: 150, flexDirection: 'row', padding: 10 }}>
          <YAxis
            data={this.array}
            contentInset={styles.contentInset}
            svg={{
              fill: 'grey',
              fontSize: 10,
            }}
            numberOfTicks={10}
            formatLabel={v => `${v}`}
            max={yMax}
          />
          <LineChart style={{ flex: 1, marginLeft: 16 }} data={this.array} svg={{ stroke: 'rgb(134, 65, 244)' }} contentInset={styles.contentInset} yMax={yMax} xMax={400}>
            <Grid />
          </LineChart>
        </View>
        <Text style={{ textAlign: 'right', alignSelf: 'stretch' }}>x axis: time</Text>
      </View>
    );
  }
}

export default Animated.createAnimatedComponent(LineChartComponent);
