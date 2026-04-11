import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  Pressable,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const CARD_WIDTH = Math.round(screenWidth * 0.72);
const CARD_GAP = 18;

const PRODUCTS = [
  {
    id: "p1",
    name: "Linen Shirt",
    subtitle: "Soft weave, airy feel",
    price: "$48",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p2",
    name: "Classic Watch",
    subtitle: "Steel, minimalist dial",
    price: "$126",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "Leather Tote",
    subtitle: "Crafted for daily carry",
    price: "$92",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
  },
];

function HeaderCarousel() {
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={styles.kicker}>New arrivals</Text>
          <Text style={styles.title}>Essentials for today</Text>
        </View>
        <Pressable style={styles.headerButton}>
          <Text style={styles.headerButtonText}>View all</Text>
        </Pressable>
      </View>

      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + CARD_GAP}
        decelerationRate="fast"
        contentContainerStyle={styles.carouselContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardPrice}>{item.price}</Text>
                <Pressable style={styles.cardCta}>
                  <Text style={styles.cardCtaText}>Add</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  kicker: {
    fontSize: 12,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    color: "#8B8378",
    marginBottom: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1F1B16",
  },
  headerButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "#E9E4DD",
  },
  headerButtonText: {
    fontSize: 12,
    letterSpacing: 0.6,
    color: "#3A332C",
    textTransform: "uppercase",
  },
  carouselContent: {
    paddingLeft: 24,
    paddingRight: 8,
    paddingBottom: 30,
  },
  card: {
    width: CARD_WIDTH,
    marginRight: CARD_GAP,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    shadowColor: "#1F1B16",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 6,
  },
  cardImage: {
    width: "100%",
    height: CARD_WIDTH * 0.9,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  cardBody: {
    padding: 18,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F1B16",
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#7D7469",
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F1B16",
  },
  cardCta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 18,
    backgroundColor: "#1F1B16",
  },
  cardCtaText: {
    fontSize: 12,
    letterSpacing: 0.6,
    color: "#F7F5F2",
    textTransform: "uppercase",
  },
});

export default HeaderCarousel;
