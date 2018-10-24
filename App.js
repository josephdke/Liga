import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import AppNavigator from './src/scenes/Navigation';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'            
    ]);
  }

  render() {
    return (
      <AppNavigator/>
    );
  }
}
