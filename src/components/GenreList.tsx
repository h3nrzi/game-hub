import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { data: genres, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;

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
