import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchCharacters,
	fetchCharacterDetails,
	setSelectedCharacter,
	setCurrentPage,
} from '../../redux/slice/characterSlice';
import { RootState, AppDispatch } from '../../redux/store';
import { SideLeftContainer, SideLeftButton, SideLeftCharacterName } from './sideLeft.styles';

interface SideLeftProps {
	onClose: () => void;
}

const SideLeft: React.FC<SideLeftProps> = ({ onClose }) => {
	const dispatch = useDispatch<AppDispatch>();
	const selectedCharacter = useSelector((state: RootState) => state.character.selectedCharacter);
	const characters = useSelector((state: RootState) => state.character.characters);
	const currentPage = useSelector((state: RootState) => state.character.currentPage);
	const status = useSelector((state: RootState) => state.character.status);
	const backgroundColors = useSelector((state: RootState) => state.character.backgroundColors);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchCharacters());
		}
	}, [status, dispatch]);

	useEffect(() => {
		if (selectedCharacter) {
			const index = characters.findIndex((character) => character.name === selectedCharacter);
			if (index !== -1) {
				const page = Math.floor(index / 4);
				dispatch(setCurrentPage(page));
			}
		}
	}, [selectedCharacter, characters, dispatch]);

	const handleCharacterClick = (character: { name: string; url: string }) => {
		dispatch(setSelectedCharacter(character.name));
		dispatch(fetchCharacterDetails(character.url));
		onClose();
	};

	const charactersPerPage = 4;
	const startIndex = currentPage * charactersPerPage;
	const displayedCharacters = characters.slice(startIndex, startIndex + charactersPerPage);

	return (
		<SideLeftContainer>
			{displayedCharacters.map((character) => (
				<SideLeftButton
					key={character.name}
					selected={selectedCharacter === character.name}
					backgroundColor={backgroundColors[1]}
					onClick={() => handleCharacterClick(character)}
					style={{
						backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
							character.url.split('/')[6]
						}.png)`,
					}}
				>
					<SideLeftCharacterName>{character.name}</SideLeftCharacterName>
				</SideLeftButton>
			))}
		</SideLeftContainer>
	);
};

export default SideLeft;
