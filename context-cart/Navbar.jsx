import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useGlobalContext } from "./context";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <View style={styles.nav}>
      <View style={styles.navCenter}>
        <Text style={styles.navTitle}>useReducer</Text>
        <View style={styles.navContainer}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="cart"
              size={30}
              color={styles.navTitle.color}
            />
            <View style={styles.amountContainer}>
              <Text style={styles.totalAmount}>{amount}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Navbar;
