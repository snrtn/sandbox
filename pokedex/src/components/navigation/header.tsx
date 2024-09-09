import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchCharacters, setSelectedCharacter, fetchCharacterDetails } from '../../redux/slice/characterSlice';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, InputAdornment } from '@mui/material';
import { HeadContainer, HeadDropdown, HeadSearchBox, HeadHamburgerIcon, HeadSearchInput } from './header.styles';
import { FaBars, FaSearch } from 'react-icons/fa';

interface HeaderProps {
	toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
	const dispatch = useDispatch<AppDispatch>();
	const characters = useSelector((state: RootState) => state.character.characters);
	const status = useSelector((state: RootState) => state.character.status);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredCharacters, setFilteredCharacters] = useState<{ name: string; url: string }[]>([]);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchCharacters());
		}
	}, [status, dispatch]);

	useEffect(() => {
		if (searchTerm) {
			const filtered = characters.filter((character) =>
				character.name.toLowerCase().includes(searchTerm.toLowerCase()),
			);
			setFilteredCharacters(filtered);
		} else {
			setFilteredCharacters([]);
		}
	}, [searchTerm, characters]);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleCharacterClick = (character: { name: string; url: string }) => {
		dispatch(setSelectedCharacter(character.name));
		dispatch(fetchCharacterDetails(character.url));
		setSearchTerm('');
		setFilteredCharacters([]);
	};

	return (
		<HeadContainer>
			<HeadSearchBox>
				<HeadSearchInput
					fullWidth
					placeholder='Search characters'
					value={searchTerm}
					onChange={handleSearchChange}
					InputProps={{
						style: { color: 'white' },
						endAdornment: (
							<InputAdornment position='end'>
								<FaSearch color='white' />
							</InputAdornment>
						),
						classes: {
							input: 'search-input',
						},
					}}
				/>
				{filteredCharacters.length > 0 && (
					<HeadDropdown>
						<List>
							{filteredCharacters.map((character) => (
								<ListItem key={character.name} button onClick={() => handleCharacterClick(character)}>
									<ListItemAvatar>
										<Avatar
											src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
												character.url.split('/')[6]
											}.png`}
											alt={character.name}
										/>
									</ListItemAvatar>
									<ListItemText primary={character.name} primaryTypographyProps={{ color: 'black' }} />
								</ListItem>
							))}
						</List>
					</HeadDropdown>
				)}
			</HeadSearchBox>
			<HeadHamburgerIcon onClick={toggleMenu}>
				<FaBars size={30} />
			</HeadHamburgerIcon>
		</HeadContainer>
	);
};

export default Header;
