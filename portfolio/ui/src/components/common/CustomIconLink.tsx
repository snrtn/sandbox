import React from 'react';
import { IconType } from 'react-icons';
import { CustomIconLinkContainer } from './customIconLink.styles';

interface CustomIconLinkProps {
	to?: string;
	bgColor: string;
	icon: IconType;
}

const CustomIconLink: React.FC<CustomIconLinkProps> = ({ to, bgColor, icon: Icon }) => {
	const content = (
		<CustomIconLinkContainer bgColor={bgColor}>
			<Icon className='fa' />
		</CustomIconLinkContainer>
	);

	return to ? (
		<a href={to} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
			{content}
		</a>
	) : (
		content
	);
};

export default CustomIconLink;
