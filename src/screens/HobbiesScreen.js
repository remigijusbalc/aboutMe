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
import { GradientView, Card } from "../components";

const TitleComponent = ({ title }) => {
  return (
    <View style={{ flexDirection: "row", padding: 16 }}>
      <Text style={{ fontSize: 25 }}>{title}</Text>
    </View>
  );
};

const DescriptionComponent = ({ description }) => {
  return <Text style={{ textAlign: "center", padding: 8 }}>{description}</Text>;
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

const HobbiesComponent = ({ hobbiesArray, toggleModal }) => {
  return hobbiesArray.map((hobby, idx) => {
    if (hobby.hasOwnProperty("openVideos")) {
      return (
        <Card>
          <TitleComponent title={hobby.title} />
          <DescriptionComponent description={hobby.description} />

          <Text
            style={{
              alignItems: "center",
              backgroundColor: "#e0ebfc",
              textAlign: "center",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              padding: 8,
              fontSize: 18,
              fontWeight: "800"
            }}
            onPress={toggleModal}
          >
            {hobby.openVideos}
          </Text>
        </Card>
      );
    } else
      return (
        <Card>
          <TitleComponent title={hobby.title} />
          <DescriptionComponent description={hobby.description} />
        </Card>
      );
  });
};

class HobbiesScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };
  }

  toggleModal = hi => {
    return this.setState(prevState => {
      return { modalVisible: !prevState.modalVisible };
    });
  };

  render() {
    const { modalVisible } = this.state;
    const {
      translations: { Hobbies, drumming, jogging, books, football }
    } = this.props;
    return (
      <GradientView style={{ flex: 1 }}>
        <Text style={{ fontSize: 40, textAlign: "center", paddingTop: 8 }}>
          {Hobbies}
        </Text>
        <VideoModal
          visible={modalVisible}
          closeModal={this.toggleModal}
          videoUris={[
            "https://www.youtube.com/embed/CPJIwKVBsBI",
            "https://www.youtube.com/embed/ejNl4pcn1M4",
            "https://www.youtube.com/embed/kTJYf1y5PzM"
          ]}
        />
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <HobbiesComponent
            toggleModal={this.toggleModal}
            hobbiesArray={[drumming, jogging, books, football]}
          />
        </ScrollView>
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
