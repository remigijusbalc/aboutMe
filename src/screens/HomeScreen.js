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
import { GradientView } from "../components";
import Icon from "react-native-vector-icons/Feather";
import { connect } from "react-redux";
import { remoteAccounts } from "../helpers";

const RemoteAccountsComponent = () => {
  return remoteAccounts.map((account, idx) => {
    return (
      <TouchableOpacity
        key={account.imageName + idx}
        onPress={() => Linking.openURL(account.uri)}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
          source={{ uri: account.imageName }}
        />
      </TouchableOpacity>
    );
  });
};

const AboutMeModal = ({ visible, toggleModal, aboutMeDescription }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}
      >
        <View style={{ backgroundColor: "#fff", padding: 20 }}>
          <Icon
            style={{ marginLeft: "auto" }}
            onPress={toggleModal}
            name="x-circle"
            size={20}
          />
          <Text style={{ textAlign: "center" }}>{aboutMeDescription}</Text>
        </View>
      </View>
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
      translations: { homeProffesion, homeButton, homeDescription }
    } = this.props;
    return (
      <GradientView style={{ flex: 1, justifyContent: "center" }}>
        <Image
          style={{
            //width: null,
            //height: null,
            flex: 0.5,
            resizeMode: "contain"
          }}
          source={{ uri: "avatar" }}
        />
        <Text style={styles.h1}>Remigijus Balčiūnas</Text>
        <Text style={styles.h2}>{homeProffesion}</Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "grey",
            backgroundColor: "darkgrey",
            padding: 8,
            width: "40%",
            borderRadius: 10,
            justifyContent: "center"
          }}
          onPress={this.toggleModal}
        >
          <Text style={{ textAlign: "center" }}>{homeButton}</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: 15,
            width: "100%"
          }}
        >
          <RemoteAccountsComponent />
        </View>
        <AboutMeModal
          visible={modalVisible}
          toggleModal={this.toggleModal}
          aboutMeDescription={homeDescription}
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
    backgroundColor: "#F5FCFF"
  },
  h2: {
    textAlign: "center",
    fontSize: 20,
    margin: 4
  },
  h1: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#333333",
    fontSize: 20,
    margin: 8
  }
});
