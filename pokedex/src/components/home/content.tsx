import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FaRulerVertical } from 'react-icons/fa';
import { GiWeight } from 'react-icons/gi';
import { AiOutlineArrowUp } from 'react-icons/ai';
import {
	ContentContainer,
	ContentTitle,
	ContentImage,
	ContentInfoText,
	ContentAbilityList,
	ContentAbilityItem,
} from './content.styles';

const Content: React.FC = () => {
	const selectedCharacter = useSelector((state: RootState) => state.character.selectedCharacter);
	const selectedMenu = useSelector((state: RootState) => state.character.selectedMenu);
	const characterDetails = useSelector((state: RootState) => state.character.characterDetails);

	if (!selectedCharacter) {
		return <ContentContainer>Select a character</ContentContainer>;
	}

	const details = characterDetails[selectedCharacter];

	if (!details) {
		return <ContentContainer>Loading character details...</ContentContainer>;
	}

	return (
		<ContentContainer>
			<ContentTitle>{details.name.toUpperCase()}</ContentTitle>
			{selectedMenu === 'info' && (
				<div>
					<ContentImage src={details.sprites.front_default} alt={details.name} />
				</div>
			)}
			{selectedMenu === 'stats' && (
				<div>
					<ContentInfoText>
						<FaRulerVertical /> Height: {details.height}
					</ContentInfoText>
					<ContentInfoText>
						<GiWeight /> Weight: {details.weight}
					</ContentInfoText>
					<ContentInfoText>
						<AiOutlineArrowUp /> Base Experience: {details.base_experience}
					</ContentInfoText>
				</div>
			)}
			{selectedMenu === 'abilities' && (
				<div>
					<p>
						<strong>Abilities:</strong>
					</p>
					<ContentAbilityList>
						{details.abilities.map((ability: any, index: number) => (
							<ContentAbilityItem key={index}>{ability.ability.name}</ContentAbilityItem>
						))}
					</ContentAbilityList>
				</div>
			)}
		</ContentContainer>
	);
};

export default Content;
