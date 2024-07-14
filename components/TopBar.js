import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { FontAwesome as FontAwesomeIcon } from "@expo/vector-icons";

function DropdownBar({ text = "Filter" }) {
  return (
    <TouchableOpacity style={dropdownStyles.container}>
      <Text style={dropdownStyles.text}>{text}</Text>
      <FontAwesomeIcon
        name="caret-down"
        size={16}
        color="black"
        style={dropdownStyles.icon}
      />
    </TouchableOpacity>
  );
}
export default function TopBar() {
  return (
    <View style={styles.container}>
      {/* First bar */}
      <View style={styles.iconBar}>
        <FontAwesome5 name="comments" size={27} color="white" />
        <MaterialIcons name="home" size={29} color="pink" />
        <FontAwesome name="user" size={27} color="white" />
      </View>

      {/* Padding between text bar and dropdown bar */}
      <View style={styles.paddingBetweenBars} />

      {/* Second bar with text */}
      <View style={styles.textBar}>
        <Text style={styles.text}>Home Feed</Text>
      </View>

      {/* Padding between text bar and dropdown bar */}
      <View style={styles.paddingBetweenBars} />

      {/* Dropdown Bar */}
      <DropdownBar text="Filter" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", // Column layout for stacking icon bars vertically
    backgroundColor: "grey",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
  iconBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
  },

  textBar: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  paddingBetweenBars: {
    height: 20, // Add vertical padding between bars
    backgroundColor: "white",
  },
});

const dropdownStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center the contents horizontally
    backgroundColor: "lightgrey",
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 10, // Add some margin to separate from the element above
    alignSelf: "center", // Center the dropdown bar horizontally
    width: 350, // Adjusted the width to make the dropdown bar longer
  },
  text: {
    fontSize: 17,
    color: "black",
  },
  icon: {
    marginLeft: 10, // Add some space between the text and the icon
  },
});
