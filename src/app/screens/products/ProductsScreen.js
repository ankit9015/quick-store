import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { ProductInfoCard } from "./productInfoCard/ProductInfoCard";
import { Spacer } from "../../components/spacer";
import { SafeArea } from "../../components/safeArea";


const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const ProductList = styled.FlatList.attrs({
	contentContainerStyle: {
		padding: 16,
	},
})``;

export const ProductsScreen = () => (
	<SafeArea>
		<SearchContainer>
			<Searchbar />
		</SearchContainer>

		<ProductList
			data={[
				{ name: 1 },
				{ name: 2 },
				{ name: 3 },
				{ name: 4 },
				{ name: 5 },
				{ name: 6 },
				{ name: 7 },
				{ name: 8 },
				{ name: 9 },
				{ name: 10 },
				{ name: 11 },
				{ name: 12 },
				{ name: 13 },
				{ name: 14 },
			]}
			renderItem={() => (
				<Spacer position='bottom' size='large'>
					<ProductInfoCard />
				</Spacer>
			)}
			keyExtractor={(item) => item.name}
		/>
	</SafeArea>
);
