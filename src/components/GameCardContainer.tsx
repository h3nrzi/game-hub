import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			borderRadius="10px"
			overflow="hidden"
			width="100%"
		>
			{children}
		</Box>
	);
};

export default GameCardContainer;
