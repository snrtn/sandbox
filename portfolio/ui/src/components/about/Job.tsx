import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { JobSection, JobController, JobIconButton } from './job.styles';

const sectionsData = [
	{
		titleKey: 'about.job.title2',
		descriptionKey: 'about.job.content2',
		descriptionKey1: 'about.job.detail3',
		descriptionKey2: 'about.job.detail4',
		background: '#2880B9',
	},
	{
		titleKey: 'about.job.title3',
		descriptionKey: 'about.job.content3',
		descriptionKey1: 'about.job.detail5',
		descriptionKey2: 'about.job.detail6',
		background: '#283953',
	},
	{
		titleKey: 'about.job.title4',
		descriptionKey: 'about.job.content4',
		descriptionKey1: '',
		descriptionKey2: 'about.job.detail7',
		background: '#8853D0',
	},
];

const Job: React.FC = () => {
	const { t } = useTranslation();
	const [index, setIndex] = useState(0);
	const maxIndex = sectionsData.length - 1;

	const handleNext = () => {
		if (index < maxIndex) setIndex((prev) => prev + 1);
	};

	const handlePrev = () => {
		if (index > 0) setIndex((prev) => prev - 1);
	};

	return (
		<Box position='relative' height='100vh' overflow='hidden'>
			<Box
				display='flex'
				flexDirection='column'
				width='100%'
				sx={{
					height: `${sectionsData.length * 100}vh`,
					transform: `translateY(-${index * 100}vh)`,
					transition: 'transform 0.5s ease-in-out',
				}}
			>
				{sectionsData.map((section, i) => (
					<JobSection key={i} background={section.background}>
						<div>
							<Typography variant='h5' sx={{ zIndex: 1 }}>
								{t(section.titleKey) as string}
							</Typography>
							<Typography variant='body1' sx={{ mt: 2, zIndex: 1, color: 'lightgray' }}>
								{t(section.descriptionKey) as string}
							</Typography>
							<Typography variant='body1' sx={{ mt: 2, zIndex: 1 }}>
								{t(section.descriptionKey1) as string}
							</Typography>
							<Typography variant='body1' sx={{ mt: 1, zIndex: 1 }}>
								{t(section.descriptionKey2) as string}
							</Typography>
						</div>
					</JobSection>
				))}
			</Box>
			<JobController>
				<JobIconButton onClick={handlePrev} disabled={index === 0}>
					<MdKeyboardArrowUp />
				</JobIconButton>
				<Typography variant='h6' sx={{ color: 'white', textAlign: 'center' }}>
					{index + 1}/{sectionsData.length}
				</Typography>
				<JobIconButton onClick={handleNext} disabled={index === maxIndex}>
					<MdKeyboardArrowDown />
				</JobIconButton>
			</JobController>
		</Box>
	);
};

export default Job;
