import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
	onSelectGenre(genre: Genre): void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, error, isLoading } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<>
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
								onClick={() => onSelectGenre(genre)}
								fontWeight={
									selectedGenre?.id === genre.id ? "extrabold" : "normal"
								}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
