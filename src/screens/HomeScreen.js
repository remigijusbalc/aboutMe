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
      <TouchableOpacity
        //hitSlop={}
        onPress={() => openUri(account.title)}
      >
        <View key={idx} style={{ flexDirection: "row", marginLeft: 8 }}>
          <Icon color="#fff" size={30} name={account.iconName} />
          <Text style={styles.h2}>{account.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);
  return (
    <View
      style={{
        flexDirection: "column"
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
      visible={true} //visible
    >
      <GradientView
        style={{
          flex: 1
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
        <View style={{ flexDirection: "row", backgroundColor: "red" }}>
          <MyAvatar />
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.h1}>{name}</Text>
            <Text style={styles.h2}>{proffesion}</Text>
          </View>
        </View>
        <PersonalInfoComponent />

        <View
          style={{
            backgroundColor: "#bbc0c9",
            flex: 0.4,
            margin: 32
          }}
        >
          <Text style={{ textAlign: "center" }}>{aboutMeDescription}</Text>
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
        <View style={{ flex: 0.8, justifyContent: "center" }}>
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
