import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ProductInfoCard } from "./ProductInfoCard";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
	padding: ${(props) => props.theme.space[3]};
`;

const ProductListContainer = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
`;

export const ProductsScreen = () => (
	<SafeArea>
		<SearchContainer>
			<Searchbar />
		</SearchContainer>
		<ProductListContainer>
			<ProductInfoCard />
		</ProductListContainer>
	</SafeArea>
);
