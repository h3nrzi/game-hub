import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}

const CriticScore = ({ score }: Props) => {
	let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

	return (
		<Badge
			fontSize="16px"
			px="10px"
			borderRadius="5px"
			colorScheme={color}
		>
			{score}
		</Badge>
	);
};

export default CriticScore;
