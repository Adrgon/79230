import React from "react";
import { View, Text, Image } from "react-native";
import globalStyles from "./styles";

const List = ({ people }) => {
  return (
    <View>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <View key={id} style={globalStyles.person}>
            <Image source={{ uri: image }} style={globalStyles.image} />
            <View style={globalStyles.info}>
              <Text style={globalStyles.name}>{name}</Text>
              <Text style={globalStyles.age}>{age} years</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default List;
