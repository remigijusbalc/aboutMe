import React from "react";
import { TouchableOpacity, Image } from "react-native";
import {languageImages } from "../helpers";

export default LanguageComponent = ({onSelect}) => {
    return Object.keys(languageImages).map(value => {
        return(
            <TouchableOpacity
            key={value}
            onPress={() => onSelect(value)}>
            <Image
            key={value}
            style={{ width: 150, height: 150}}
            source={{uri: languageImages[value] }}/>
        </TouchableOpacity>
        )
    })
};