import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
	return (
		<Box
			borderRadius="10px"
			overflow="hidden"
			width="100%"
			_hover={{ transform: "scale(1.03)", transition: "transform .15s ease-in" }}
		>
			{children}
		</Box>
	);
};

export default GameCardContainer;
