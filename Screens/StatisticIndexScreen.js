import { View, Text } from "react-native";
import { StackedBarChart } from "react-native-svg-charts";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatisticScreen } from "./StatisticsScreen";
export function StatisticIndexScreen() {
  const Tab = createMaterialTopTabNavigator();
  const today = new Date();
  const lastTwoMonth = new Date(new Date().setMonth(today.getMonth() - 2));
  const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
  return (
    <Tab.Navigator initialRouteName="ThisMonth">
      <Tab.Screen
        name={`LastTwoMonth`}
        options={{
          tabBarLabel: `${lastTwoMonth.getMonth()}/${lastTwoMonth.getFullYear()}`,
        }}
        initialParams={{
          year: lastTwoMonth.getFullYear(),
          month: lastTwoMonth.getMonth(),
        }}
        component={StatisticScreen}
      />
      <Tab.Screen
        name={`LastMonth`}
        options={{
          tabBarLabel: "Tháng trước",
        }}
        initialParams={{
          year: lastMonth.getFullYear(),
          month: lastMonth.getMonth(),
        }}
        component={StatisticScreen}
      />
      <Tab.Screen
        name={`ThisMonth`}
        options={{
          tabBarLabel: "Tháng này"
        }}
        initialParams={{
          year: today.getFullYear(),
          month: today.getMonth(),
        }}
        component={StatisticScreen}
      />
    </Tab.Navigator>
  );
}
