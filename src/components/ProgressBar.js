import React from "react";
import { View } from "react-native";


export default (ProgressBar = ({ percent, width }) => {
    const barWidth = width * (percent / 100);

  return (
    <View style={{ borderWidth: 1, borderColor: "lightgrey", width: width }}>
      <View
        style={{
          width: barWidth,
          height: 16,
          backgroundColor: "green"
        }}
      />
    </View>
  );
});
