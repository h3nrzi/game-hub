import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const ExpandableText = ({ children }: { children: string }) => {
	const [expanded, setExpanded] = useState(false);
	const limit = 300;

	if (!children) return null;
	if (children.length <= limit) return <Text>{children}</Text>;

	const summary = expanded ? children : children.substring(0, limit) + "...";

	return (
		<Text>
			{summary}
			<Button
				size="xs"
				fontWeight="bold"
				colorScheme="green"
				ms="5px"
				onClick={() => setExpanded(!expanded)}
			>
				{expanded ? "Show Less" : "Read More"}
			</Button>
		</Text>
	);
};

export default ExpandableText;
