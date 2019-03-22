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
  TouchableOpacity,
  Modal,
  SafeAreaView,
  ScrollView,
  Alert
} from "react-native";
import { WebView } from "react-native-webview";
import { connect } from "react-redux";
import { GradientView, Card, HobbyIcon } from "../components";
import Icon from "react-native-vector-icons/Feather";

const TitleComponent = ({ title, icon, style }) => {
  return (
    <View style={style}>
      <HobbyIcon style={{ color: "#fff" }} name={icon} size={40} />
      <Text style={{ fontSize: 25, color: "#fff", margin: 8 }}>{title}</Text>
    </View>
  );
};

const DescriptionComponent = ({ description, buttonComponent, style }) => {
  return (
    <View style={style}>
      <Text style={{ textAlign: "center", margin: 8 }}>{description}</Text>
      {buttonComponent}
    </View>
  );
};

class VideoModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleWebviewError = uri => {
    const {
      closeModal,
      errorTextTitle,
      errorTextDescription,
      alertOK,
      alertNO
    } = this.props;
    closeModal();
    return Alert.alert(errorTextTitle, errorTextDescription, [
      { text: alertOK, onPress: () => Linking.openURL(uri) },
      {
        text: alertNO,
        onPress: () => {
          return;
        }
      }
    ]);
  };

  render() {
    const { visible, closeModal, videoUris, closeModalText } = this.props;
    return (
      <Modal visible={visible} style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            borderColor: "lightgrey",
            backgroundColor: "#CC181E",
            padding: 8
          }}
          onPress={closeModal}
        >
          <Text style={{ textAlign: "center" }}>{closeModalText}</Text>
        </TouchableOpacity>

        <SafeAreaView style={{ flex: 1 }}>
          {videoUris.map(videoUri => {
            return (
              <WebView
                onError={() => this.handleWebviewError(videoUri)}
                key={videoUri}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: videoUri }}
              />
            );
          })}
        </SafeAreaView>
      </Modal>
    );
  }
}

class HobbiesScreen extends Component<Props> {
  constructor(props) {
    super(props);

    const {
      translations: { drumming, jogging, books, football }
    } = props;

    const primaryColors = ["#2897B0", "#D7971A", "#90A02D"];
    const secondaryColors = ["#99CED9", "#F7E7C7", "#CED5A2"];
    const hobbiesIcons = ["drum", "running", "book", "futbol"];

    const hobbies = [drumming, jogging, books, football].reduce(
      (acc, hobby, index) => {
        hobby.expanded = false;
        hobby.primaryColor = primaryColors[index % primaryColors.length];
        hobby.secondaryColor = secondaryColors[index % secondaryColors.length];
        hobby.icon = hobbiesIcons[index];
        acc.push(hobby);
        return acc;
      },
      []
    );

    this.state = {
      modalVisible: false,
      hobbiesArray: hobbies
    };
  }

  toggleModal = () => {
    return this.setState(prevState => {
      return { modalVisible: !prevState.modalVisible };
    });
  };
  toggleBox = id => {
    const { hobbiesArray } = this.state;
    const updatedHobbiesArray = hobbiesArray.map(value => {
      if (value === id) value.expanded = !value.expanded;
      return value;
    });
    this.setState({ hobbiesArray: updatedHobbiesArray });
  };

  render() {
    const { hobbiesArray, modalVisible } = this.state;
    const {
      translations: { Hobbies }
    } = this.props;

    return (
      <GradientView style={{ flex: 1 }}>
        <Text style={{ fontSize: 40, textAlign: "center", paddingTop: 8 }}>
          {Hobbies}
        </Text>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {hobbiesArray.map((hobby, index) => {
            return (
              <Card
                style={{
                  backgroundColor: hobby.primaryColor,
                  width: "80%"
                }}
              >
                <TouchableOpacity onPress={this.toggleBox.bind(this, hobby)}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <TitleComponent
                      style={{ flexDirection: "row", margin: 8 }}
                      icon={hobby.icon}
                      title={hobby.title}
                    />
                    <Icon
                      style={{ margin: 8 }}
                      color="#fff"
                      name="arrow-down-circle"
                      size={40}
                    />
                  </View>
                  {hobby.expanded ? (
                    <DescriptionComponent
                      style={{
                        flexDirection: "column",
                        backgroundColor: hobby.secondaryColor,
                        width: "100%"
                      }}
                      description={hobby.description}
                      buttonComponent={
                        hobby.hasOwnProperty("openVideos") ? (
                          <TouchableOpacity
                            style={{ margin: 8 }}
                            onPress={this.toggleModal}
                          >
                            <Text
                              style={{
                                alignSelf: "center",
                                backgroundColor: hobby.primaryColor,
                                textAlign: "center",
                                width: "20%",
                                fontSize: 18,
                                fontWeight: "800",
                                color: "#fff"
                              }}
                            >
                              {hobby.openVideos}
                            </Text>
                          </TouchableOpacity>
                        ) : null
                      }
                    />
                  ) : null}
                </TouchableOpacity>
              </Card>
            );
          })}
        </ScrollView>
        <VideoModal
          visible={modalVisible}
          closeModal={this.toggleModal}
          videoUris={[
            "https://www.youtube.com/embed/CPJIwKVBsBI",
            "https://www.youtube.com/embed/ejNl4pcn1M4",
            "https://www.youtube.com/embed/kTJYf1y5PzM"
          ]}
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
)(HobbiesScreen);
