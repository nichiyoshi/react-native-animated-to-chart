import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';
import LineCartComponent from './lineChartComponent';

export default class TimingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0), // Initial value for opacity: 0
    };
  }

  componentDidMount() {
    const { fadeAnim } = this.state;

    Animated.timing(
      // Animate over time
      fadeAnim, // The animated value to drive
      {
        toValue: 1,
        duration: 5500,
      },
    ).start(); // Starts the animation
  }

  render() {
    const { fadeAnim } = this.state;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Timing Example</Text>
        <LineCartComponent value={fadeAnim} yMax={1} />
        <Animated.Image
          style={{
            width: 113,
            height: 100,
            transform: [{ scale: fadeAnim }],
            padding: 20,
          }}
          source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
        />
      </View>
    );
  }
}
