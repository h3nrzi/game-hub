import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
	const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

	const selectedGenre = useGenre(genreId);
	const selectedPlatform = usePlatform(platformId);

	const heading = `${selectedPlatform?.name || ""} ${selectedGenre?.name || ""} Games`;

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
