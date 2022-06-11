import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Layout } from "../constants/Layout";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

function createFakeData(time) {
  const labels = [];
  const dataOfMount = [];
  const month = time.getMonth();
  const dayOfMonth = new Date(
    time.getFullYear(),
    time.getMonth() + 1,
    0
  ).getDate();
  for (let index = 1; index <= dayOfMonth; index += 7) {
    const formatDay = (i) => (i < 10 ? `0${i}` : i.toString());
    labels.push(
      `${formatDay(index)}/${month} - ${Math.min(
        formatDay(index + 7),
        dayOfMonth
      )}/${month}`
    );
    dataOfMount.push(-Math.round(Math.random() * 100000));
  }
  const data = {
    labels: labels,
    datasets: [
      {
        data: dataOfMount.map((d) => Math.abs(d)),
      },
      {
        data: dataOfMount,
      },
    ],
  };
  return data;
}

export function StatisticScreen({ route }) {
  const params = route.params;
  const time = new Date(params.year, params.month);
  const inData = createFakeData(time);
  const outData = createFakeData(time);
  const pieData = [
    {
      name: "Lương",
      value: Math.random() * 100000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Lãi suất",
      value: Math.random() * 100000,
      color: "#b4de2a",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Thưởng",
      value: Math.random() * 100000,
      color: "#2ade39",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Không rõ",
      value: Math.random() * 100000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const month = time.getMonth();
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={{ fontSize: 20 }}>
          Thống kê chi tiêu tháng{" "}
          {`${
            month < 3 ? "0" + month.toString() : month
          }/${time.getFullYear()}`}
        </Text>
        <Text style={{ fontSize: 18 }}>
          Số dư
        </Text>
        <View style={{ marginHorizontal: 5, flex: 1, flexDirection: "row", justifyContent: "center", alignContent: "center"}}>
          <View style={{flex : 1}}>
            <Text style={{fontSize:16, opacity: 0.4}}>Số dư đầu</Text>
            <Text style={{fontSize:36}}>{Math.round(Math.random() * 100000)}đ</Text>
          </View>
          <View  style={{flex : 1}}>
            <Text style={{fontSize:16, opacity: 0.4}}>Số dư cuôi</Text>
            <Text style={{fontSize:36}}>{Math.round(Math.random() * 100000)}đ</Text>
          </View>
        </View>

        <BarChart
          yAxisLabel="đ"
          yAxisSuffix="k"
          data={inData}
          width={Layout.window.width - 10}
          height={220}
          verticalLabelRotation={-10}
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            decimalPlaces: 0,
            formatTopBarValue: (value) => value + "đ",
            propsForVerticalLabels: {
              translateX: -50,
              translateY: 10,
            },
          }}
          style={{
            borderRadius: 16,
            marginVertical: 8,
          }}
          xLabelsOffset={-10}
          showBarTops={true}
          showValuesOnTopOfBars={true}
        />
        <Text>Mức thu trong tháng</Text>
        <BarChart
          yAxisLabel="đ"
          yAxisSuffix="k"
          data={outData}
          width={Layout.window.width - 10}
          height={220}
          verticalLabelRotation={-10}
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            color: (opacity = 1) => `red`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            decimalPlaces: 0,
            formatTopBarValue: (value) => value + "đ",
            propsForVerticalLabels: {
              translateX: -50,
              translateY: 10,
            },
          }}
          style={{
            borderRadius: 16,
            marginVertical: 8,
          }}
          xLabelsOffset={-10}
          showBarTops={true}
          showValuesOnTopOfBars={true}
        />
        <Text>Mức chi trong tháng</Text>
        <PieChart
          width={Layout.window.width - 10}
          data={pieData}
          height={220}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          accessor={"value"}
          chartConfig={{
            color: (opacity = 1) => `red`,
          }}
          fromZero={true}
          showValuesOnTopOfBars={true}
          showBarTops={true}
        />
        <Text>Phân tích khoản thu</Text>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    alignItems: "center",
  },
});
