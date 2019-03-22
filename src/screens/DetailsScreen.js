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
import { skills, TEXT } from "../helpers";
import { ProgressBar, GradientView, Card } from "../components";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import Store from "../redux/Store";

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

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
    <Card style={{ flex: 1, backgroundColor: "#2897B0" }}>{children}</Card>
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
        <Text style={styles.cardTextHeader}>{education[value].title}</Text>
        <Text style={styles.cardText}>{education[value].value}</Text>
      </View>
    );
  });

  return (
    <Card style={{ flex: 1, backgroundColor: "#D7971A" }}>{children}</Card>
  );
};

const SkillsComponent = ({}) => {
  return skills.map((skill, i) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text
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
      <GradientView style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center"
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
    ...TEXT.H1,
    //padding: 8,
    marginBottom: 16,
    fontFamily: "sans-serif-medium",
    color: "#fff"
  },
  cardTextHeader: {
    ...TEXT.H2,
    fontWeight: "bold",
    marginBottom: 16,
    fontFamily: "sans-serif-medium",
    color: "#fff"
  },
  cardText: {
    ...TEXT.H2,
    marginBottom: 16,
    fontFamily: "sans-serif-medium",
    color: "#fff"
  }
});
