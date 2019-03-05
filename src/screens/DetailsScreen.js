/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { skills } from "../helpers";
import { ProgressBar, GradientView } from "../components";
import { connect } from "react-redux";
type Props = {};

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

class DetailsScreen extends Component<Props> {
  render() {
    const { translations } = this.props;
    console.log(translations,"trans");
    return (
      <GradientView style={{flex: 1}}>
        <Text style={styles.welcome}>Skills</Text>
        {Object.keys(skills).map(value => {
          return(
            <View style={{flex: 0, flexDirection: "row" , justifyContent: "space-evenly"}}>
            <Icon name="label" size={20} color="black"/>
            <Text style={{ fontSize: moderateScale(20)}}>{value}</Text>
            <ProgressBar percent={skills[value]} width={150}/>
            </View>
          )
        })}
        <Text style={styles.welcome}>Experience</Text>
        <Text style={styles.welcome}>Education</Text>
        </GradientView>

    );
  }
}

const mapDispatchToProps = state => {
  return {
    translations: state.language.translations
  }
}

export default connect(mapDispatchToProps, null)(DetailsScreen);

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
