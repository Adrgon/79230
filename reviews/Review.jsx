import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import people from "./data";
import { AntDesign } from "@expo/vector-icons";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: image }} style={styles.personImg} />
        <View style={styles.quoteIcon}>
          <AntDesign name="right" size={24} color="#fff" />
        </View>
      </View>

      <Text style={styles.author}>{name}</Text>
      <Text style={styles.job}>{job}</Text>
      <Text style={styles.info}>{text}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.navButton} onPress={prevPerson}>
          <AntDesign name="left" size={24} color="#617d98" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={nextPerson}>
          <AntDesign name="right" size={24} color="#617d98" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.randomBtn} onPress={randomPerson}>
        <Text style={styles.randomBtnText}>surprise me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: "#fff",
    padding: 25,
    width: "100%",
    maxWidth: 450,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imgContainer: {
    position: "relative",
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  personImg: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
    resizeMode: "cover",
    borderWidth: 4,
    borderColor: "#8bcbf9",
  },
  quoteIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#49a6e9",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  author: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 4,
  },
  job: {
    fontSize: 16,
    color: "#49a6e9",
    textTransform: "uppercase",
    marginBottom: 12,
  },
  info: {
    color: "#617d98",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  navButton: {
    marginHorizontal: 8,
  },
  randomBtn: {
    backgroundColor: "#ebf7ff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  randomBtnText: {
    color: "#49a6e9",
    textTransform: "capitalize",
  },
});

export default Review;
