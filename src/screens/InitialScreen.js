import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { setLanguage, getLanguage } from "../redux/actions";
import { LanguageComponent } from "../components";

class InitialScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true
        }
    }

     componentDidMount(){
         this.props.getLanguage()
        .then(() => this.props.navigation.navigate("App"))
        .catch(() => this.setState({ loading: false}));
    }

    handleLanguageSelect(lang){
        return this.props.setLanguage(lang)
        .then(() => this.props.navigation.navigate("App"));
    }


    render(){
        const { loading } = this.state;
        return(
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1}}>
            {loading ?
              <ActivityIndicator size="large" color="#0000ff" /> : 
                <LanguageComponent onSelect={this.handleLanguageSelect.bind(this)}/>}
            </View>
        )
    }
}

export default connect((state) => {
  return { language: state.language}
},{
    setLanguage,
    getLanguage
})(InitialScreen);