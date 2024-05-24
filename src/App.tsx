import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder: string;
	searchText: string;
}

const App = () => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<GridItem area="nav">
				<Navbar
					onSearch={(s) =>
						setGameQuery({
							...gameQuery,
							searchText: s,
						})
					}
				/>
			</GridItem>
			<Show above="lg">
				<GridItem
					area="aside"
					px="10px"
				>
					<GenreList
						onSelectGenre={(genre) =>
							setGameQuery({
								...gameQuery,
								genreId: genre.id,
							})
						}
						selectedGenreId={gameQuery.genreId}
					/>
				</GridItem>
			</Show>
			<GridItem
				area="main"
				px="15px"
			>
				<GameHeading gameQuery={gameQuery} />
				<HStack
					spacing="15px"
					mb="20px"
				>
					<PlatformSelector
						onSelectPlatform={(platform) =>
							setGameQuery({
								...gameQuery,
								platformId: platform.id,
							})
						}
						selectedPlatformId={gameQuery.platformId}
					/>
					<SortSelector
						onSelectSortOrder={(s) =>
							setGameQuery({
								...gameQuery,
								sortOrder: s,
							})
						}
						sortOrder={gameQuery.sortOrder}
					/>
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
};

export default App;
