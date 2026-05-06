import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useGlobalContext } from "./context";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, toggleAmount } = useGlobalContext();

  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: img }} style={styles.cartItemImage} />
      <View style={styles.cartItemContent}>
        <Text style={styles.cartItemTitle}>{title}</Text>
        <Text style={styles.itemPrice}>${price}</Text>
        <TouchableOpacity onPress={() => remove(id)}>
          <Text style={styles.removeButton}>Eliminar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.amountContainer}>
        <TouchableOpacity
          style={styles.amountButton}
          onPress={() => toggleAmount(id, "inc")}
        >
          <MaterialCommunityIcons
            name="chevron-up"
            size={24}
            color={styles.amountButton.color}
          />
        </TouchableOpacity>
        <Text style={styles.amount}>{amount}</Text>
        <TouchableOpacity
          style={styles.amountButton}
          onPress={() => toggleAmount(id, "dec")}
        >
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={styles.amountButton.color}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
