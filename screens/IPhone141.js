import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

const IPhone141 = () => {
  return (
    <View style={styles.iPhone141}>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={styles.sIGNUPText}>SIGN UP</Text>
      <Text style={styles.text}>{`  `}</Text>
      <Text style={styles.eMAILText}>EMAIL</Text>
      <View style={styles.rectangleView} />
      <Text style={styles.pASSWORDText}>PASSWORD</Text>
      <View style={styles.rectangleView1} />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={styles.rectangleView2} />
      <View style={styles.rectangleView3} />
      <View style={styles.rectangleView4} />
      <Text style={styles.oRText}>OR</Text>
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={styles.image3Icon}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <Text style={styles.alreadyAUserLOGIN}>Already a user? LOGIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image1Icon: {
    position: "absolute",
    top: 0,
    left: 31,
    width: 314,
    height: 226,
  },
  sIGNUPText: {
    position: "absolute",
    top: 196,
    left: 61,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  text: {
    position: "absolute",
    top: 386,
    left: 100,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  eMAILText: {
    position: "absolute",
    top: 230,
    left: 61,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    top: 260,
    left: 52,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 300,
    height: 30,
  },
  pASSWORDText: {
    position: "absolute",
    top: 305,
    left: 54,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  rectangleView1: {
    position: "absolute",
    top: 340,
    left: 52,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 300,
    height: 30,
  },
  lineIcon: {
    position: "absolute",
    top: 619,
    left: 40,
    width: 330,
    height: 11,
    display: "none",
  },
  rectangleView2: {
    position: "absolute",
    top: 392,
    left: 178,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 32,
    height: 30,
  },
  rectangleView3: {
    position: "absolute",
    top: 405,
    left: 40,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: 320,
    height: 5,
  },
  rectangleView4: {
    position: "absolute",
    top: 395,
    left: 178,
    backgroundColor: "#fff",
    width: 32,
    height: 30,
  },
  oRText: {
    position: "absolute",
    top: 398,
    left: 183,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  image2Icon: {
    position: "absolute",
    top: 480,
    left: 78,
    width: 48,
    height: 35,
  },
  image3Icon: {
    position: "absolute",
    top: 475,
    left: 270,
    width: 40,
    height: 40,
  },
  alreadyAUserLOGIN: {
    position: "absolute",
    top: 542,
    left: 92,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 198,
  },
  iPhone141: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone141;
