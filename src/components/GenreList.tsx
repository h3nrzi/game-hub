import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { data: genres } = useGenres();

	return (
		<List>
			{genres.map((genre) => (
				<ListItem
					key={genre.id}
					py="5px"
				>
					<HStack>
						<Image
							src={genre.image_background}
							boxSize="32px"
							borderRadius="5px"
						/>
						<Text fontSize="large">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
