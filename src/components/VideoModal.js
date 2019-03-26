import React, { Component } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";
import { moderateScale } from "../helpers";
import { WebView } from "react-native-webview";

class VideoModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleWebviewError = uri => {
    const {
      translations: {
        closeModal,
        errorTextTitle,
        errorTextDescription,
        alertOK,
        alertNO
      }
    } = this.props;
    closeModal();
    return Alert.alert(
      errorTextTitle,
      errorTextDescription,
      [
        { text: alertOK, onPress: () => Linking.openURL(uri) },
        {
          text: alertNO,
          onPress: () => {
            return;
          }
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    const {
      visible,
      closeModal,
      videoUris,
      translations: { closeModalText }
    } = this.props;
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
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: moderateScale(16)
            }}
          >
            {closeModalText}
          </Text>
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

const mapStateToProps = state => {
  return {
    translations: state.language.translations
  };
};

export default connect(
  mapStateToProps,
  null
)(VideoModal);
