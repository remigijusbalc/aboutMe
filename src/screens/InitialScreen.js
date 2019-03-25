import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { setLanguage, getLanguage } from "../redux/actions";
import { LanguageComponent, GradientView } from "../components";

class InitialScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props
      .getLanguage()
      .then(() => this.props.navigation.navigate("App"))
      .catch(() => this.setState({ loading: false }));
  }

  handleLanguageSelect(lang) {
    return this.props
      .setLanguage(lang)
      .then(() => this.props.navigation.navigate("App"));
  }

  render() {
    const { loading } = this.state;
    return (
      <GradientView
        style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
      >
        {loading ? (
          <ActivityIndicator size="large" color="#2897B0" />
        ) : (
          <LanguageComponent onSelect={this.handleLanguageSelect.bind(this)} />
        )}
      </GradientView>
    );
  }
}

export default connect(
  state => {
    return { language: state.language };
  },
  {
    setLanguage,
    getLanguage
  }
)(InitialScreen);
