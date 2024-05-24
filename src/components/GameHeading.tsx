import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

const GameHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
	const { data: fetchResponseGenres } = useGenres();
	const selectedGenre = fetchResponseGenres.results.find(
		(genre) => genre.id === gameQuery.genreId
	);

	const { data: fetchResponsePlatform } = usePlatforms();
	const selectedPlatform = fetchResponsePlatform.results.find(
		(platform) => platform.id === gameQuery.platformId
	);

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
