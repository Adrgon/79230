import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import data from "./data";
import List from "./List";
import globalStyles from "./styles";

export default function App() {
  const [people, setPeople] = useState(data);

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar backgroundColor="#f28ab2" />
      <View style={globalStyles.content}>
        <Text style={globalStyles.heading}>
          {people.length} birthdays today
        </Text>
        <List people={people} />
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => setPeople([])}
        >
          <Text style={globalStyles.buttonText}>clear all</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
