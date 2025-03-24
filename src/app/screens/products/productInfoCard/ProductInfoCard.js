import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../../assets/star";
import open from "../../../../../assets/open";

import {
	ProductCard,
	ProductCardCover,
	Info,
	Section,
	SectionEnd,
	Rating,
	Icon,
	Address,
} from "./productInfoCard.style";
import { Spacer } from "../../../components/spacer";
import { Text } from "../../../components/typography";

export const ProductInfoCard = ({ Product = {} }) => {
	const {
		name = "Product A",
		icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
		photos = ["https://picsum.photos/200/300"],
		address = "some address",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
	} = Product;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<ProductCard elevation={5}>
			<ProductCardCover key={name} source={{ uri: photos[0] }} />
			<Info>
				<Text variant='label'>{name}</Text>
				<Section>
					<Rating>
						{ratingArray.map((_, i) => (
							<SvgXml key={i} xml={star} width={20} height={20} />
						))}
					</Rating>
					<SectionEnd>
						{isClosedTemporarily && (
							<Text variant='error'>CLOSED TEMPORARILY</Text>
						)}
						<Spacer position='left' size='large'>
							{isOpenNow && (
								<SvgXml xml={open} width={20} height={20} />
							)}
						</Spacer>
						<Spacer position='left' size='large'>
							<Icon source={{ uri: icon }} />
						</Spacer>
					</SectionEnd>
				</Section>
				<Address>{address}</Address>
			</Info>
		</ProductCard>
	);
};
