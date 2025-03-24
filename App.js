import { React } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ProductsScreen } from "./src/app/screens/products/ProductsScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/app/components/safeArea";
import { Text } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Settings = () => (
	<SafeArea>
		<Text>Settings</Text>
	</SafeArea>
);
const Map = () => (
	<SafeArea>
		<Text>Map</Text>
	</SafeArea>
);

const TabBarIcon = ({ color, size, route }) => {
	let iconName;

	if (route.name === "Products") {
		iconName = "list";
	} else if (route.name === "Settings") {
		iconName = "settings";
	} else if (route.name === "Map") {
		iconName = "map";
	}

	// You can return any component that you like here!
	return <Ionicons name={iconName} size={size} color={color} />;
};

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarIcon: (props) =>
								TabBarIcon({ ...props, route }),
						})}
						tabBarOptions={{
							activeTintColor: "red",
							inactiveTintColor: "gray",
						}}
					>
						<Tab.Screen
							name='Products'
							component={ProductsScreen}
						/>
						<Tab.Screen name='Map' component={Map} />
						<Tab.Screen name='Settings' component={Settings} />
					</Tab.Navigator>
				</NavigationContainer>
			</ThemeProvider>
			<ExpoStatusBar style='auto' />
		</>
	);
}
