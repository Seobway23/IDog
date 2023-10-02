import { View, Dimensions, Alert, Text } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const WalkStatistics = (props: any) => {
	const data = props.weekList.map((item) => ({
		date: item.walkingStartDate,
		count: item.countSum,
	}));
	return (
		<View>
			<ContributionGraph
				values={data}
				endDate={new Date()}
				numDays={105}
				width={screenWidth}
				height={220}
				chartConfig={{
					backgroundColor: "#F2F2F2",
					backgroundGradientFrom: "#F2F2F2",
					backgroundGradientTo: "#F2F2F2",
					decimalPlaces: 0,
					color: (opacity = 1) => `rgba(238, 138, 114, ${opacity})`,
					labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
				}}
				tooltipDataAttrs={{ "data-tip": "tooltip" }}
				style={{
					marginVertical: 8,
				}}
			/>
		</View>
	);
};

export default WalkStatistics;
