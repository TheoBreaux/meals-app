import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: color },
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    //iOS shadow offset
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
