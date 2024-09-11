import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { CustomIconLink } from '../common';
import { HeaderCustomLink, HeaderLogoText } from './header.styles';
import { FooterSnsSection, FooterWrapper } from './footer.styles';
import { Link } from 'react-router-dom';

const Footer = () => {
	const { t } = useTranslation();
	return (
		<FooterWrapper>
			<Container sx={{ marginBottom: '1rem' }}>
				<Link to='/'>
					<HeaderLogoText variant='h4'>JunFolio</HeaderLogoText>
				</Link>
				<Typography variant='body1' color='orange' mt={1}>
					{t('home.jumbotron.description') as string}
					<span> {t('home.jumbotron.description1') as string}</span>
				</Typography>
			</Container>
			<Container sx={{ marginBottom: '3rem' }}>
				<Box display='flex' justifyContent='center' gap='2rem'>
					<HeaderCustomLink to='/about'>{t('navigation.about')}</HeaderCustomLink>
					<HeaderCustomLink to='/blog'>{t('navigation.blog')}</HeaderCustomLink>
					<HeaderCustomLink to='/contact'>{t('navigation.contact')}</HeaderCustomLink>
				</Box>
			</Container>
			<FooterSnsSection>
				<CustomIconLink
					bgColor={'#0077B5'}
					icon={SiLinkedin}
					to={'https://www.linkedin.com/in/hanjun-kim-1b1741171/'}
				/>
				<CustomIconLink bgColor={'#181717'} icon={SiGithub} to={'https://github.com/snrtn?tab=repositories'} />
			</FooterSnsSection>
		</FooterWrapper>
	);
};

export default Footer;
