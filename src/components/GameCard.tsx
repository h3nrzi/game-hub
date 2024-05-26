import { Card, CardBody, Heading, HStack, Image, Link as ChakraLink, useColorMode } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const { colorMode } = useColorMode();
	const bg = colorMode === "light" ? "gray.100" : "gray.700";

	return (
		<Card borderRadius="10px">
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody backgroundColor={bg}>
				<HStack
					justifyContent="space-between"
					mb="15px"
				>
					<PlatformIconList platforms={game.parent_platforms.map(({ platform }) => platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">
					<ChakraLink
						as={ReactRouterLink}
						to={`/games/${game.slug}`}
					>
						{game.name}
					</ChakraLink>
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
