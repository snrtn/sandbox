import React from 'react';
import { useTranslation } from 'react-i18next';
import {
	JumbotronContainer,
	JumbotronWrapper,
	JumbotronLeftSection,
	JumbotronRightSection,
	JumbotronTitle,
	JumbotronDescription,
	JumbotronImage,
} from './jumbotron.styles';

const Jumbotron: React.FC = () => {
	const { t } = useTranslation();
	return (
		<JumbotronContainer>
			<JumbotronWrapper>
				<JumbotronLeftSection>
					<div>
						<JumbotronDescription>{t('home.jumbotron.title') as string}</JumbotronDescription>
						<JumbotronTitle>{t('home.jumbotron.description') as string}</JumbotronTitle>
						<JumbotronDescription>{t('home.jumbotron.description1') as string}</JumbotronDescription>
					</div>
				</JumbotronLeftSection>
				<JumbotronRightSection>
					<JumbotronImage src='./assets/home/about/hello.svg' alt='Profile' />
				</JumbotronRightSection>
			</JumbotronWrapper>
		</JumbotronContainer>
	);
};

export default Jumbotron;
