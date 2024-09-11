import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { KimScrollContainer, KimSection, KimSectionContent, KimSectionSVG } from './kim.styles';

const sectionsData = [
	{
		titleKey: 'about.kim.title2',
		descriptionKey: 'about.kim.description2',
		backgroundColor: '#006266',
		svgSrc: './assets/about/front.svg',
	},
	{
		titleKey: 'about.kim.title3',
		descriptionKey: 'about.kim.description3',
		backgroundColor: '#2980b9',
		svgSrc: './assets/about/team.svg',
	},
	{
		titleKey: 'about.kim.title4',
		descriptionKey: 'about.kim.description4',
		backgroundColor: '#8854d0',
		svgSrc: './assets/about/up.svg',
	},
];

interface KimProps {
	scrollEnabled: boolean;
	onScrollToEnd: () => void;
}

const Kim: React.FC<KimProps> = ({ scrollEnabled, onScrollToEnd }) => {
	const { t, i18n } = useTranslation();
	const language = i18n.language;
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [visibleSections, setVisibleSections] = useState<boolean[]>(new Array(sectionsData.length).fill(false));
	const [firstTimeVisibleSections, setFirstTimeVisibleSections] = useState<boolean[]>(
		new Array(sectionsData.length).fill(false),
	);

	const handleScroll = useCallback(() => {
		const container = document.getElementById('scroll-container');
		if (container) {
			const isAtBottom = container.scrollTop + container.clientHeight + container.scrollHeight;
			if (isAtBottom) {
				onScrollToEnd();
			}
		}
	}, [onScrollToEnd]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
					if (index !== -1) {
						setVisibleSections((prev) => {
							const newVisibility = [...prev];
							newVisibility[index] = entry.isIntersecting;
							return newVisibility;
						});
						if (entry.isIntersecting) {
							setFirstTimeVisibleSections((prev) => {
								const newVisibility = [...prev];
								newVisibility[index] = true;
								return newVisibility;
							});
						}
					}
				});
			},
			{ threshold: 0.5 },
		);

		const sections = sectionRefs.current;
		sections.forEach((section) => {
			if (section) observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				if (section) observer.unobserve(section);
			});
		};
	}, []);

	useEffect(() => {
		const container = document.getElementById('scroll-container');
		if (container && scrollEnabled) {
			container.addEventListener('scroll', handleScroll);
			return () => {
				container.removeEventListener('scroll', handleScroll);
			};
		}
	}, [scrollEnabled, handleScroll]);

	return (
		<KimScrollContainer id='scroll-container' scrollEnabled={scrollEnabled.toString()}>
			{sectionsData.map((section, index) => (
				<KimSection
					key={index}
					ref={(el) => {
						sectionRefs.current[index] = el as HTMLDivElement;
					}}
					backgroundColor={section.backgroundColor}
					index={index}
					language={language}
				>
					<KimSectionContent visible={firstTimeVisibleSections[index] || visibleSections[index]}>
						<h1>{t(section.titleKey) as string}</h1>
						<div style={{ marginTop: '1rem' }}>
							<p style={{ marginTop: '0.5rem' }}>{t(section.descriptionKey) as string}</p>
						</div>
						<KimSectionSVG
							src={section.svgSrc}
							alt={`Section ${index + 1} Icon`}
							visible={firstTimeVisibleSections[index] || visibleSections[index]}
						/>
					</KimSectionContent>
				</KimSection>
			))}
		</KimScrollContainer>
	);
};

export default Kim;
