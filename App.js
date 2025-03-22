import { React } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ProductsScreen } from "./src/app/screens/products/ProductsScreen";

export default function App() {
	return (
		<>
			<ProductsScreen />
			<ExpoStatusBar style="auto" />
		</>
	);
}
