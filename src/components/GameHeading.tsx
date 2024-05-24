import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

const GameHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
	const selectedGenre = useGenre(gameQuery.genreId);
	const selectedPlatform = usePlatform(gameQuery.platformId);

	const heading = `${selectedPlatform?.name || ""} ${
		selectedGenre?.name || ""
	} Games`;

	return (
		<Heading
			as="h1"
			my="15px"
			fontSize="5xl"
			textAlign="center"
		>
			{heading}
		</Heading>
	);
};

export default GameHeading;
