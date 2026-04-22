import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const [imageError, setImageError] = useState(false);

  const imageSource =
    imageError || !image
      ? {
          uri: "https://via.placeholder.com/400x300/f0f0f0/cccccc?text=No+disponible",
        }
      : { uri: image };

  return (
    <View style={styles.tourContainer}>
      <Image
        source={imageSource}
        style={styles.tourImage}
        resizeMode="cover"
        onError={() => setImageError(true)}
      />
      <View style={styles.tourFooter}>
        <View style={styles.tourInfo}>
          <Text style={styles.tourName}>{name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.tourPrice}>${price}</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.infoText}>
            {readMore ? info : `${info.substring(0, 200)}...`}
          </Text>
          <TouchableOpacity onPress={() => setReadMore(!readMore)}>
            <Text style={styles.readMoreBtn}>
              {readMore ? "show less" : "read more"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => removeTour(id)}
        >
          <Text style={styles.deleteBtnText}>not interested</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tour;
