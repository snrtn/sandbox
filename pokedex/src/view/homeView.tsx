import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Lefter from '../components/navigation/lefter';
import SideLeft from '../components/navigation/sideLeft';
import SideRight from '../components/navigation/sideRight';
import Content from '../components/home/content';
import Header from '../components/navigation/header';
import { RootState } from '../redux/store';
import { HomeWrapper, HomeContainer, HomeContentBox, HomeMenuContainer } from './homeView.styles';

const HomeView: React.FC = () => {
	const backgroundColors = useSelector((state: RootState) => state.character.backgroundColors);
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<HomeWrapper>
			<HomeContainer backgroundColors={backgroundColors}>
				<Header toggleMenu={toggleMenu} />
				<HomeMenuContainer menuOpen={menuOpen}>
					<Lefter />
					<SideLeft onClose={toggleMenu} />
				</HomeMenuContainer>
				<HomeContentBox>
					<Content />
				</HomeContentBox>
				<SideRight />
			</HomeContainer>
		</HomeWrapper>
	);
};

export default HomeView;
