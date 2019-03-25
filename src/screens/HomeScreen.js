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
import { GradientView, MyAvatar, Button } from "../components";
import { connect } from "react-redux";
import { personalInfo } from "../helpers";
import Icon from "react-native-vector-icons/Feather";
import { LanguageChangeComponent } from "../components/LanguageComponent";
import { setLanguage } from "../redux/actions";

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const { width, height } = Dimensions.get("screen");

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const PersonalInfoComponent = () => {
  openUri = url => {
    try {
      console.log(url, "ur");
      Linking.openURL(url);
    } catch (err) {
      console.log(err);
      return alert("problem");
    }
  };
  const children = personalInfo.map((account, idx) => {
    return (
      <TouchableOpacity key={idx} onPress={() => openUri(account.url)}>
        <View
          key={idx}
          style={{
            flexDirection: "row",
            marginVertical: 16
          }}
        >
          <Icon
            style={{ marginRight: 8 }}
            color="#fff"
            size={30}
            name={account.iconName}
          />
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.h2}>
            {account.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }, []);
  return (
    <View
      style={{
        flexDirection: "column",
        marginVertical: 8,
        paddingRight: 12
      }}
    >
      {children}
    </View>
  );
};

const AboutMeModal = ({
  visible,
  toggleModal,
  aboutMeDescription,
  name,
  proffesion,
  header
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      onRequestClose={toggleModal}
      visible={visible} //visible
    >
      <GradientView
        style={{
          flex: 1,
          paddingHorizontal: 24,
          paddingBottom: 16
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            margin: 8
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.h1}>{header}</Text>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Icon
              style={{ color: "#fff" }}
              onPress={toggleModal}
              name="x-circle"
              size={30}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            //alignItems: "center",
            justifyContent: "space-evenly",
            flex: 1
          }}
        >
          <MyAvatar />
          <View
            style={{
              flexDirection: "column",
              //  justifyContent: "center"
              flex: 0.5
            }}
          >
            <Text style={styles.h1}>{name.toUpperCase()}</Text>
            <Text style={styles.h2}>{proffesion.toUpperCase()}</Text>
          </View>
        </View>

        <PersonalInfoComponent />

        <View
          style={{
            backgroundColor: "#bbc0c9",
            flex: 1
          }}
        >
          <Text style={{ textAlign: "left", margin: 16 }}>
            {aboutMeDescription}
          </Text>
        </View>
      </GradientView>
    </Modal>
  );
};

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
      translations: { homeProffesion, aboutMe, homeDescription }
    } = this.props;
    const name = "Remigijus Balčiūnas";
    return (
      <GradientView style={{ flex: 1 }}>
        <LanguageChangeComponent
          style={{ margin: 8 }}
          onSelect={this.props.setLanguage.bind(this)}
        />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <MyAvatar />
          <Text style={styles.h1}>{name}</Text>
          <Text style={styles.h2}>{homeProffesion}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
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
            title="Details"
            style={{
              margin: 8,
              backgroundColor: "#D7971A"
            }}
          />

          <Button
            onPress={this.navigateTo.bind(this, "Hobbies")}
            title="Hobbies"
            style={{
              margin: 8,
              backgroundColor: "#90A02D"
            }}
          />
        </View>

        <AboutMeModal
          visible={modalVisible}
          toggleModal={this.toggleModal}
          aboutMeDescription={homeDescription}
          name={name}
          proffesion={homeProffesion}
          header={aboutMe}
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
    fontSize: moderateScale(16),
    color: "#fff"
  },
  h1: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    fontSize: moderateScale(20),
    margin: 8
  }
});
