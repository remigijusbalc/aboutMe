import React, { Component } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  Alert,
  Text,
  Linking
} from "react-native";
import { moderateScale, STYLES, personalInfo } from "../helpers";
import { MyAvatar, GradientView } from "./";
import Icon from "react-native-vector-icons/Feather";
import { connect } from "react-redux";

const PersonalInfoComponent = ({ translations }) => {
  openUri = url => {
    try {
      console.log(url, "ur");
      Linking.openURL(url);
    } catch (err) {
      console.log(err);
      return Alert.alert(
        translations.errorTextTitle,
        translations.errorDescription,
        [{ text: translations.understood, onPress: () => {} }]
      );
    }
  };
  const children = personalInfo.map((account, idx) => {
    return (
      <TouchableOpacity key={idx} onPress={() => openUri(account.url)}>
        <View
          key={idx}
          style={{
            flexDirection: "row",
            marginVertical: moderateScale(8)
          }}
        >
          <Icon
            style={[STYLES.ICON, { marginRight: 8 }]}
            // color="#fff"
            //  size={30}
            name={account.iconName}
          />
          <Text numberOfLines={1} ellipsizeMode="tail" style={STYLES.BODY}>
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
        marginVertical: moderateScale(8),
        paddingRight: 12
      }}
    >
      {children}
    </View>
  );
};

class AboutMeModal extends Component {
  render() {
    const {
      visible,
      toggleModal,
      name,
      translations: {
        homeDescription,
        homeProffesion,
        aboutMe,
        errorDescription,
        understood,
        errorTextTitle
      }
    } = this.props;
    console.log(this.props, "props");
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
              margin: moderateScale(8)
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={STYLES.H1}>{aboutMe}</Text>
            </View>
            <View style={{ marginLeft: "auto" }}>
              <Icon
                style={STYLES.ICON}
                onPress={toggleModal}
                name="x-circle"
                //size={30}
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
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: moderateScale(20),
                  color: "#fff",
                  textAlign: "center"
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: moderateScale(16),
                  textAlign: "center"
                }}
              >
                {homeProffesion.toUpperCase()}
              </Text>
            </View>
          </View>

          <PersonalInfoComponent
            translations={{
              errorTextTitle,
              errorDescription,
              understood
            }}
          />

          <View
            style={{
              backgroundColor: "#bbc0c9",
              flex: 1
            }}
          >
            <Text style={{ textAlign: "left", margin: 16 }}>
              {homeDescription}
            </Text>
          </View>
        </GradientView>
      </Modal>
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
)(AboutMeModal);
