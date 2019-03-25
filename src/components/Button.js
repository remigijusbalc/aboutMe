import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default ({ title, onPress, style }) => (
  <TouchableOpacity
    style={[
      {
        padding: 16,
        width: "90%"
      },
      style
    ]}
    onPress={onPress}
  >
    <Text style={{ textAlign: "center", color: "#fff", fontSize: 20 }}>
      {title}
    </Text>
  </TouchableOpacity>
);
