import React, { Component } from "react";
import { AppRegistry, Image, View, Text, StyleSheet } from "react-native";
import { yellow } from "ansi-colors";

export default class Comp1 extends Component {
  state = {
    showImage: false
  };
  componentDidMount() {}
  render() {
    let pic = {
      uri:
        "https://s3.ap-south-1.amazonaws.com/staticstaging.mystartupequity.com/2019-08-18T12%3A20%3A24.177Z-wp2575153.jpg"
    };
    if (this.state.showImage) {
      return null;
    }
    return (
      <View style={{ flex: 1 }}>
        {/* <View style={{ flex: 1, backgroundColor: "powderblue" }} />
          <View style={{ flex: 2, backgroundColor: "skyblue" }} />
          <View style={{ flex: 3, backgroundColor: "steelblue" }} /> */}
        <View style={{ flex: 1 }}>
          <Image source={pic} style={{ flex: 1 }} />
          <Text style={styles.brief}>
            {/* My Favourite actress is Shraddha Kapooorrrr,My Favourite actress is */}
          </Text>
          <Text style={styles.red}>beautifull Eyes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  brief: {
    color: "green",
    fontSize: 24
  },
  red: {
    color: "red"
  },
  containerSize: {
    // flex: 0
  },
  border: {
    backgroundColor: "yellow"
  }
});

AppRegistry.registerComponent("FIRST_REACT_NATIVE", () => Comp1);
