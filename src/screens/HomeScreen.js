import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  Linking
} from "react-native";
import { GradientView, MyAvatar } from "../components";
import { connect } from "react-redux";
import { personalInfo } from "../helpers";
import Icon from "react-native-vector-icons/Feather";

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const PersonalInfoComponent = () => {
  openUri = uri => {
    try {
      Linking.openURL(uri);
    } catch (err) {
      console.log(err);
      return alert("problem");
    }
  };
  const children = personalInfo.map((account, idx) => {
    return (
      <TouchableOpacity key={idx} onPress={() => openUri(account.title)}>
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
        marginVertical: 8
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
          padding: 24
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row"
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
              size={100}
            />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <View
            style={{
              flexDirection: "row",
              //alignItems: "center",
              //  justifyContent: "flex-start",
              // backgroundColor: "pink",
              flex: 0.8
            }}
          >
            <MyAvatar />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                flex: 0.4
              }}
            >
              <Text style={styles.h1}>{name.toUpperCase()}</Text>
              <Text style={styles.h2}>{proffesion.toUpperCase()}</Text>
            </View>
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
        <View style={{ flex: 1, justifyContent: "center" }}>
          <MyAvatar />
          <Text style={styles.h1}>{name}</Text>
          <Text style={styles.h2}>{homeProffesion}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#f4b642",
            padding: 16,
            width: "90%",
            alignSelf: "center"
          }}
          onPress={this.toggleModal}
        >
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 20 }}>
            {aboutMe}
          </Text>
        </TouchableOpacity>
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
  null
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
    fontSize: 20,
    color: "#fff"
  },
  h1: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 40,
    margin: 8
  }
});
