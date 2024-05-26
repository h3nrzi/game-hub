import { Box, Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreList = () => {
	const { data, error, isLoading } = useGenres();
	const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setGenreId = useGameQueryStore((s) => s.setGenreId);

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<Box>
			<Heading
				as="h2"
				fontSize="2xl"
				my="30px"
			>
				Genres
			</Heading>
			<List>
				{data.results?.map((genre) => (
					<ListItem
						key={genre.id}
						py="5px"
					>
						<HStack>
							<Image
								src={genre.image_background}
								boxSize="32px"
								borderRadius="5px"
								objectFit="cover"
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								fontSize="large"
								variant="link"
								onClick={() => setGenreId(genre.id)}
								fontWeight={genreId === genre.id ? "extrabold" : "normal"}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default GenreList;
