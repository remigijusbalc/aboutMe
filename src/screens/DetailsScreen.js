/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { skills, STYLES, moderateScale } from "../helpers";
import { ProgressBar, GradientView, Card } from "../components";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import Store from "../redux/Store";

const ExperienceComponent = ({ experience }) => {
  const children = Object.keys(experience).reduce((acc, company) => {
    acc.push(
      <Text style={styles.cardTextHeader} key={company}>
        {company}
      </Text>
    );
    Object.keys(experience[company]).map(info => {
      acc.push(
        <Text style={styles.cardText} key={info}>
          {experience[company][info]}
        </Text>
      );
    });
    return acc;
  }, []);

  return (
    <Card style={{ flex: 1, backgroundColor: "#2897B0", padding: 8 }}>
      {children}
    </Card>
  );
};

const EducationComponent = ({ education }) => {
  const children = Object.keys(education).map(value => {
    return (
      <View
        key={value}
        style={{
          flexDirection: "row"
        }}
      >
        <Text key={value} style={styles.cardTextHeader}>
          {education[value].title}
        </Text>
        <Text key={value} style={styles.cardText}>
          {education[value].value}
        </Text>
      </View>
    );
  });

  return (
    <Card style={{ flex: 1, backgroundColor: "#D7971A", padding: 8 }}>
      {children}
    </Card>
  );
};

const SkillsComponent = ({}) => {
  return skills.map((skill, i) => {
    return (
      <View key={skill} style={{ flexDirection: "row" }}>
        <Text
          key={skill}
          style={{
            fontSize: moderateScale(12),
            marginRight: "auto",
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          {skill.name}
        </Text>
        <ProgressBar percent={skill.percent} width={200} />
      </View>
    );
  });
};

class DetailsScreen extends Component {
  render() {
    const { translations } = this.props;
    return (
      <GradientView style={{ flex: 1, padding: 8 }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            <Text style={styles.headerText}>
              {translations.Details.toUpperCase()}
            </Text>
          </View>
          <SkillsComponent />

          <Text style={styles.headerText}>
            {translations.education.toUpperCase()}
          </Text>

          <EducationComponent education={translations.personalEducation} />

          <Text style={styles.headerText}>
            {translations.experience.toUpperCase()}
          </Text>

          <ExperienceComponent experience={translations.workExperience} />
        </ScrollView>
      </GradientView>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    translations: state.language.translations
  };
};

export default connect(
  mapDispatchToProps,
  null
)(DetailsScreen);

const styles = StyleSheet.create({
  headerText: {
    ...STYLES.H1,
    //padding: 8,
    margin: moderateScale(8),
    fontFamily: "sans-serif-medium",
    color: "#fff"
  },
  cardTextHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "sans-serif-medium",
    color: "#fff"
  },
  cardText: {
    fontSize: moderateScale(16),
    marginBottom: moderateScale(16),
    marginLeft: moderateScale(8),
    fontFamily: "sans-serif-medium",
    color: "#fff",
    flexShrink: 1
  }
});
