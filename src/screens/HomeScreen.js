import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  Linking,
  Dimensions
} from "react-native";
import { GradientView, MyAvatar, Button, AboutMeModal } from "../components";
import { connect } from "react-redux";
import { personalInfo, moderateScale } from "../helpers";
import { LanguageChangeComponent } from "../components/LanguageComponent";
import { setLanguage } from "../redux/actions";
import { STYLES } from "../helpers";

type Props = {};
class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };
  }
  navigateTo = screen => {
    this.props.changePage(screen);
  };

  toggleModal = () => {
    this.setState(prevState => {
      return { modalVisible: !prevState.modalVisible };
    });
  };

  render() {
    const { modalVisible } = this.state;
    const {
      translations: {
        homeProffesion,
        aboutMe,
        homeDescription,
        Details,
        Hobbies
      }
    } = this.props;
    const name = "Remigijus Balčiūnas";
    return (
      <GradientView style={{ flex: 1 }}>
        <LanguageChangeComponent
          style={{ margin: 8, flexWrap: "wrap" }}
          onSelect={this.props.setLanguage.bind(this)}
        />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <MyAvatar />
          <Text style={STYLES.H1}>{name}</Text>
          <Text style={STYLES.H2}>{homeProffesion}</Text>
        </View>
        <View style={{ alignItems: "center", paddingBottom: 8 }}>
          <Button
            onPress={this.toggleModal}
            title={aboutMe}
            style={{
              backgroundColor: "#2897B0",
              margin: 8
            }}
          />
          <Button
            onPress={this.navigateTo.bind(this, "Details")}
            title={Details}
            style={{
              margin: 8,
              backgroundColor: "#D7971A"
            }}
          />

          <Button
            onPress={this.navigateTo.bind(this, "Hobbies")}
            title={Hobbies}
            style={{
              margin: 8,
              backgroundColor: "#90A02D"
            }}
          />
        </View>

        <AboutMeModal
          visible={modalVisible}
          toggleModal={this.toggleModal}
          name={name}
        />
      </GradientView>
    );
  }
}

const mapStateToProps = state => {
  return {
    translations: state.language.translations
  };
};

export default connect(
  mapStateToProps,
  { setLanguage }
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    color: "#fff"
  },
  h2: {
    textAlign: "center",
    color: "#fff"
  },
  h1: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",

    margin: 8
  }
});
