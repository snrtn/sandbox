import React from 'react';
import { ServiceContainer, ServiceWrapper } from './service.styles';
import ServiceCard from './ServiceCard';

const serviceData = [
	{
		id: 1,
		imgSrc: './assets/home/service/code.svg',
		titleKey: 'home.services.title1',
		descriptionKey: 'home.services.description1',
		initialDarkMode: true,
	},
	{
		id: 2,
		imgSrc: './assets/home/service/thinking.svg',
		titleKey: 'home.services.title2',
		descriptionKey: 'home.services.description2',
		initialDarkMode: false,
	},
];

const Service: React.FC = () => {
	return (
		<ServiceContainer>
			<ServiceWrapper>
				{serviceData.map((service) => (
					<ServiceCard
						key={service.id}
						imgSrc={service.imgSrc}
						titleKey={service.titleKey}
						descriptionKey={service.descriptionKey}
						initialDarkMode={service.initialDarkMode}
					/>
				))}
			</ServiceWrapper>
		</ServiceContainer>
	);
};

export default Service;
