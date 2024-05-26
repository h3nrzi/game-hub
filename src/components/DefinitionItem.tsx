import { Badge, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
	return (
		<Box my="30px">
			<Badge
				as="dt"
				fontSize="md"
				colorScheme="gray"
				mb="8px"
			>
				{term}
			</Badge>
			<dd>{children}</dd>
		</Box>
	);
};

export default DefinitionItem;
