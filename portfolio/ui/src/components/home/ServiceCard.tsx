import React, { useState } from 'react';
import { Typography, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
	ServiceCardContainer,
	ServiceCardFace,
	ServiceCardSunIcon,
	ServiceCardMoonIcon,
	ServiceCardToggleButtonContainer,
} from './serviceCard.styles';

interface ServiceCardProps {
	imgSrc: string;
	titleKey: string;
	descriptionKey: string;
	initialDarkMode: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imgSrc, titleKey, descriptionKey, initialDarkMode }) => {
	const { t } = useTranslation();
	const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<ServiceCardContainer className={isDarkMode ? 'dark' : ''}>
			<ServiceCardToggleButtonContainer>
				<IconButton onClick={toggleDarkMode}>
					{isDarkMode ? <ServiceCardSunIcon className='sun-icon' /> : <ServiceCardMoonIcon className='moon-icon' />}
				</IconButton>
			</ServiceCardToggleButtonContainer>
			<ServiceCardFace>
				<img src={imgSrc} alt={imgSrc} style={{ display: 'block' }} />
			</ServiceCardFace>
			<Typography variant='h6'>{t(titleKey) as string}</Typography>
			<Typography variant='body1'>{t(descriptionKey) as string}</Typography>
		</ServiceCardContainer>
	);
};

export default ServiceCard;
