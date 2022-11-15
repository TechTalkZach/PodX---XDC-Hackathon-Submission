import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import ProfileImage from "../components/ProfileImage";
import ToDoItem from "../components/ToDoItem";
import CustomSwitch from "../components/CustomSwitch";
import {
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

import { styles } from "../constants/style";
const Payment = ({ navigation }) => {
  const [favorsTab, setMoneyTab] = useState(1);

  const onSelectSwitch = (value) => {
    setMoneyTab(value);

    if (favorsTab == 2) {
      navigation.navigate("Favors");
    }
  };
  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 40,
          }}
        >
          <View style={styles.sideBySideFlexStart2}>
            <View
              style={{
                borderWidth: 1,
                flexDirection: "row",
                borderColor: "#C6C6C6",
                borderRadius: 8,
                paddingHorizontal: 10,
                paddingVertical: 8,
                margin: 4,
                width: 250,
              }}
            >
              <Feather
                name="search"
                width={100}
                size={20}
                color="#C6C6C6"
                style={{ marginRight: 5 }}
              />
              <TextInput placeholder="Search" />
            </View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={{
                  uri: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=",
                }}
                style={styles.profileImage4}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                margin: 4,
                width: 350,
                fontSize: 19,
              }}
            >
              Recent
            </Text>
          </View>

          <View style={{ marginVertical: 0 }}>
            <CustomSwitch
              selectionMode={1}
              option1="Balances"
              option2="Payments"
              onSelectSwitch={onSelectSwitch}
            />
          </View>
          {favorsTab == 1 ? (
            <View>
              <Text
                style={{
                  margin: 4,
                  width: 350,
                  fontSize: 19,
                }}
              >
                Balances
              </Text>
              <View
                style={{
                  backgroundColor: "rgb(199, 199, 204)",
                  borderColor: "black",
                  padding: 10,
                  margin: 3,
                  borderRadius: 16,
                  width: 340,
                }}
              >
                <Text
                  style={{
                    margin: 4,
                    width: 350,
                    fontSize: 19,
                  }}
                >
                  Cash:
                </Text>
                <Text
                  style={{
                    margin: 4,
                    width: 350,
                    fontSize: 19,
                  }}
                >
                  Sats:
                </Text>
                <Text
                  style={{
                    margin: 4,
                    width: 350,
                    fontSize: 19,
                  }}
                >
                  Eth:
                </Text>
                <Text
                  style={{
                    margin: 4,
                    width: 350,
                    fontSize: 19,
                  }}
                >
                  Mls:
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;