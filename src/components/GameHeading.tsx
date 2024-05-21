import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

const GameHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
	const heading = `${gameQuery.platform?.name || ""} ${
		gameQuery.genre?.name || ""
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
