import {
	Card,
	CardBody,
	Heading,
	HStack,
	Image,
	useColorMode,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const { colorMode } = useColorMode();
	const bg = colorMode === "light" ? "gray.100" : "gray.700";

	return (
		<Card
			borderRadius="10px"
			overflow="hidden"
		>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody backgroundColor={bg}>
				<HStack
					justifyContent="space-between"
					mb="15px"
				>
					<PlatformIconList
						platforms={game.parent_platforms.map(({ platform }) => platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">
					{game.name} <Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
