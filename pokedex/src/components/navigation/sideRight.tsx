import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { MenuType, setSelectedMenu } from '../../redux/slice/characterSlice';
import { SideRightContainer, SideRightButton } from './sideRight.styles';

const SideRight: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const selectedCharacter = useSelector((state: RootState) => state.character.selectedCharacter);
	const selectedMenu = useSelector((state: RootState) => state.character.selectedMenu);
	const characterDetails = useSelector((state: RootState) => state.character.characterDetails);
	const backgroundColors = useSelector((state: RootState) => state.character.backgroundColors);

	const menus: MenuType[] = ['info', 'stats', 'abilities'];

	if (!selectedCharacter || !characterDetails[selectedCharacter]) {
		return <div></div>;
	}

	return (
		<SideRightContainer>
			{menus.map((menu) => (
				<SideRightButton
					key={menu}
					selectedMenu={selectedMenu === menu}
					backgroundColor={backgroundColors[1]}
					variant={selectedMenu === menu ? 'contained' : 'outlined'}
					onClick={() => dispatch(setSelectedMenu(menu))}
				>
					{menu}
				</SideRightButton>
			))}
		</SideRightContainer>
	);
};

export default SideRight;
