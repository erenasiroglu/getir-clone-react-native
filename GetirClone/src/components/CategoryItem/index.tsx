import React from "react";
import { Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Category } from "../../models";

const { width, height } = Dimensions.get("window");

type categoryItemProps = {
  item: Category;
};

function index({ item }: categoryItemProps) {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.25,
        height: height * 0.14,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Image
        source={{
          uri: item.src,
        }}
        style={{ width: width * 0.2, height: height * 0.1, borderRadius: 8 }}
      />
      <Text style={{ fontSize: 12, color: "#616161", fontWeight: "500" }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

export default index;
