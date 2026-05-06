import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
import { styles } from "./styles";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <ScrollView style={styles.cart}>
        <Text style={styles.cartTitle}>Tu carrito</Text>
        <Text style={styles.emptyCart}>está vacío</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.cart}>
      <Text style={styles.cartTitle}>Tu carrito</Text>
      <View>
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </View>
      <View style={styles.cartFooter}>
        <View style={styles.cartTotal}>
          <Text style={styles.cartItemTitle}>Total</Text>
          <Text style={styles.itemPrice}>${total}</Text>
        </View>
        <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
          <Text style={styles.clearButtonText}>Vaciar carrito</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CartContainer;
