import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
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
					onSearch={(s) => setGameQuery({ ...gameQuery, searchText: s })}
				/>
			</GridItem>
			<Show above="lg">
				<GridItem
					area="aside"
					px="10px"
				>
					<GenreList
						onSelectGenre={(g) => setGameQuery({ ...gameQuery, genre: g })}
						selectedGenre={gameQuery.genre}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<GameHeading gameQuery={gameQuery} />
				<HStack
					spacing="15px"
					mb="20px"
					pl="10px"
				>
					<PlatformSelector
						onSelectPlatform={(p) =>
							setGameQuery({ ...gameQuery, platform: p })
						}
						selectedPlatform={gameQuery.platform}
					/>
					<SortSelector
						onSelectSortOrder={(s) =>
							setGameQuery({ ...gameQuery, sortOrder: s })
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
