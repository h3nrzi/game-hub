import {
	Button,
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
						<Button
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
	);
};

export default GenreList;
