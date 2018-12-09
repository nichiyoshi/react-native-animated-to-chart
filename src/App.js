import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import Timing from './timing';
import Spring from './spring';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0.3), // Initial value for opacity: 0
    };
  }

  componentDidMount() {
    const { fadeAnim } = this.state;

    Animated.timing(
      // Animate over time
      fadeAnim, // The animated value to drive
      {
        toValue: 1,
        duration: 4000,
      },
    ).start(); // Starts the animation
  }

  render() {
    const { fadeAnim } = this.state;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Timing value={fadeAnim} />
        <View style={{ height: 100 }} />
        <Spring value={fadeAnim} />
      </View>
    );
  }
}
