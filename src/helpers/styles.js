import { StyleSheet, Dimensions } from "react-native";

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const { width, height } = Dimensions.get("screen");

const scale = size => (width / guidelineBaseWidth) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const styles = StyleSheet.create({
  h1: {
    fontSize: moderateScale(30),
    textAlign: "center",
    fontFamily: "sans-serif-medium",
    color: "#fff"
  },
  h2: {
    fontSize: moderateScale(20),
    //fontFamily: "sans-serif-medium",
    textAlign: "center",
    color: "#fff"
  },
  body: {
    fontSize: moderateScale(14),
    // fontFamily: "sans-serif-medium",
    textAlign: "center",
    color: "#fff"
  },
  icon: { color: "#fff", fontSize: moderateScale(30) }
});

export const STYLES = {
  H1: styles.h1,
  H2: styles.h2,
  BODY: styles.body,
  ICON: styles.icon
};

export default {
  STYLES
};
