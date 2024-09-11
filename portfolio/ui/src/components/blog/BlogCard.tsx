import React from 'react';
import { Typography } from '@mui/material';
import { BlogCardContainer, BlogCardTags, BlogCardTag } from './blogCard.styles';

interface BlogCardProps {
	title: string;
	imgSrc: string; // Image source URL or path
	tags: string[];
	onClick?: () => void; // onClick added
}

const BlogCard: React.FC<BlogCardProps> = ({ title, imgSrc, tags, onClick }) => {
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const rotateX = ((y - centerY) / centerY) * 12;
		const rotateY = ((x - centerX) / centerX) * -12;
		card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	};

	const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget;
		card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
	};

	return (
		<BlogCardContainer onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={onClick}>
			<div>
				<BlogCardTags>
					{tags.slice(0, 1).map((tag) => (
						<BlogCardTag key={tag}>{tag}</BlogCardTag>
					))}
				</BlogCardTags>
				<Typography variant='h6'>{title}</Typography>
			</div>
			<img src={imgSrc} alt={title} style={{ display: 'block' }} />
		</BlogCardContainer>
	);
};

export default BlogCard;
