import React from 'react';
import { Typography, Box } from '@mui/material';
import { ContactContainer, ContactMapSection, ContactTitle, ContactSectionImage } from './contact.styles';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Contact = () => {
	const { t } = useTranslation();

	return (
		<ContactContainer>
			<ContactTitle variant='h5'>{t('home.contact.title') as string}</ContactTitle>
			<Box display='flex' justifyContent='space-between' alignItems='center' width='1200px'>
				<ContactMapSection>
					<ContactSectionImage src='./assets/home/contact/mail.svg' alt='Email Background' />
					<Typography variant='h6' mt={5}>
						{t('home.contact.cardTitle1') as string}
					</Typography>
					<Link to='contact'>
						<Typography variant='body1' sx={{ color: 'black' }}>
							{t('home.contact.description1') as string}
						</Typography>
					</Link>
				</ContactMapSection>
				<ContactMapSection>
					<ContactSectionImage src='./assets/home/contact/experience.svg' alt='Map Background' />
					<Typography variant='h6' mt={5}>
						{t('home.contact.cardTitle3') as string}
					</Typography>
					<Link to='contact'>
						<Typography variant='body1' sx={{ color: 'black' }}>
							{t('home.contact.description3') as string}
						</Typography>
					</Link>
				</ContactMapSection>
				<ContactMapSection>
					<ContactSectionImage src='./assets/home/contact/map.svg' alt='Map Background' />
					<Typography variant='h6' mt={5}>
						{t('home.contact.cardTitle2') as string}
					</Typography>
					<Typography variant='body1'>{t('home.contact.description2') as string}</Typography>
				</ContactMapSection>
			</Box>
		</ContactContainer>
	);
};

export default Contact;
