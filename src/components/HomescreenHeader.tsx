import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import RPC from '../../ethersRPC'; // for using ethers.js
import { AppContext } from "../context/AppProvider";
import { styles } from "../constants/style";
import HomeScreenPostArea from "./HomeScreenPostArea";

const HomeScreenHeader = ({ navigation }) => {
  const { key, setKey } = React.useContext(AppContext);

  return (
    <>
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Image
        source={{
          uri: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=",
        }}
        style={styles.profileImage3} />
    </TouchableOpacity>
    <HomeScreenPostArea />
    </>
  );
};

export default HomeScreenHeader;