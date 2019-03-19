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
  let infoArray = [];
  Object.keys(experience).map(company => {
    infoArray.push(<Text>{company}</Text>);
    Object.keys(experience[company]).map(info => {
      infoArray.push(<Text>{experience[company][info]}</Text>);
    });
  });
  return infoArray;
};

const EducationComponent = ({ education }) => {
  return Object.keys(education).map(value => {
    return (
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <Text style={{ fontWeight: "800" }}>{education[value].title}</Text>
        <Text>{education[value].value}</Text>
      </View>
    );
  });
};

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: skills
    };
  }

  expandSingle = idx => {
    const { skills } = this.state;
    skills[idx].expanded = !skills[idx].expanded;
    this.setState({ skills: skills });
  };

  expandAll = allExpaned => {
    const { skills } = this.state;
    if (
      skills.every(skill => {
        return skill.expanded;
      })
    ) {
      skills.map(skill => {
        skill.expanded = false;
      });
    } else {
      skills.map(skill => {
        skill.expanded = true;
      });
    }
    this.setState({ skills: skills });
  };

  render() {
    const { translations } = this.props;
    const { skills } = this.state;
    return (
      <GradientView style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text style={[TEXT.H1, { padding: 8, marginBottom: 16 }]}>
              {translations.Details}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.expandAll();
              }}
              style={{
                alignItems: "center",
                paddingVertical: moderateScale(6),
                marginRight: 15
              }}
              key={`expandableBtn`}
            >
              <Text style={styles.expandBtnText}>
                {skills.every(skill => {
                  return skill.expanded;
                })
                  ? translations.unexpandAll
                  : translations.expandAll}
              </Text>
            </TouchableOpacity>
          </View>
          {skills.map((skill, i) => {
            return (
              <View key={`viewSkillz_${i}`}>
                <TouchableOpacity
                  onPress={() => this.expandSingle(i)}
                  key={`deetails_${i}`}
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 15,
                    marginRight: 15,
                    padding: 5
                  }}
                >
                  <Icon
                    style={{ alignItems: "flex-start" }}
                    name="label"
                    size={20}
                    color="#e0ebfc"
                  />
                  <Text
                    style={{ fontSize: moderateScale(14), marginRight: "auto" }}
                  >
                    {skill.name}
                  </Text>
                  <ProgressBar percent={skill.percent} width={200} />
                </TouchableOpacity>
                {skill.expanded ? (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text>HELLO</Text>
                    <Text>HELLO</Text>
                  </View>
                ) : null}
              </View>
            );
          })}
          <Text
            style={[
              TEXT.H1,
              { padding: 8, marginBottom: 16, fontFamily: "sans-serif-medium" }
            ]}
          >
            {translations.education.toUpperCase()}
          </Text>
          <Card style={{ flex: 1 }}>
            <EducationComponent education={translations.personalEducation} />
          </Card>
          <Text style={[TEXT.H1, { fontFamily: "sans-serif-medium" }]}>
            {translations.experience.toUpperCase()}
          </Text>
          <Card>
            <ExperienceComponent experience={translations.workExperience} />
          </Card>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  expandBtnText: {
    fontSize: moderateScale(14),
    color: "#fff",
    paddingVertical: moderateScale(4),
    fontFamily: "Mukta-Regular"
  }
});
