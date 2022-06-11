import { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable } from "react-native";
import { HomeScreen } from "../Screens/HomeScreen.js";
import { StatisticIndexScreen } from "../Screens/StatisticIndexScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { parseIconName } from "react-native-fontawesome";
import {
  faWallet,
  faChartPie,
  faPlus,
  faClipboardList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Statistic">
        <Tab.Screen
          name="Trade"
          component={HomeScreen}
          options={{
            title: "Các giao dịch",
            tabBarLabel: "Giao dịch",
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesomeIcon size={size} icon={faWallet} style={{ color: color }} />
            ),
          }}
          tabBar
        />
        <Tab.Screen
          name="Statistic"
          component={StatisticIndexScreen}
          options={{
            title: "Thống kê",
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesomeIcon size={size} icon={faChartPie} style={{ color: color }} />
            ),
          }}
        />
        <Tab.Screen
          name="Plus"
          component={HomeScreen}
          options={{
            title: "Thêm",
            tabBarLabel: "",
            tabBarIcon: ({ focused, color, size }) => (
              <View
                style={{
                  marginBottom: 0,
                  backgroundColor: "#21db30",
                  borderRadius: 100,
                  padding: 5,
                }}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{
                    color: "white",
                  }}
                  size={size + 20}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Plan"
          component={HomeScreen}
          options={{
            title: "Kế hoạch",
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesomeIcon size={size}
                icon={faClipboardList}
                style={{ color: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={HomeScreen}
          options={{
            title: "Tài khoản",
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesomeIcon  size={size} icon={faUser} style={{ color: color }} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
