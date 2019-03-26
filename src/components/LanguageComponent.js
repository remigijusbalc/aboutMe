import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { languageImages } from "../helpers";
import Store from "../redux/Store";

export default (LanguageComponent = ({ onSelect }) => {
  return Object.keys(languageImages).map(value => {
    return (
      <TouchableOpacity key={value} onPress={() => onSelect(value)}>
        <Image
          key={value}
          style={{
            width: 90,
            height: 90,
            resizeMode: "contain"
          }}
          source={{ uri: languageImages[value] }}
        />
      </TouchableOpacity>
    );
  });
});

export const LanguageChangeComponent = ({ onSelect, style }) => {
  let currentKey = Store.getState().language.key;
  return Object.keys(languageImages).map(value => {
    if (currentKey !== value)
      return (
        <TouchableOpacity key={value} onPress={() => onSelect(value)}>
          <Image
            key={value}
            style={[{ width: 50, height: 50 }, style]}
            source={{ uri: languageImages[value] }}
          />
        </TouchableOpacity>
      );
  });
};
