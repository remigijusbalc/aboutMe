import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { GradientView } from "../components";

type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <GradientView style={styles.container}>
        <Image
        style={{ width: "35%", height: "35%"}}
         source={{uri: "avatar"}}/>
        <Text style={styles.headerText}>Remigijus Balčiūnas</Text>
        <Text>Mobile Applications Developer</Text>
      </GradientView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: "bold",
    color: '#333333',
    fontSize: 20,
    margin: 4,
  },
});
