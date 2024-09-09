import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAgents } from '../queries/agents';
import { setAgents } from '../store/agentsSlice';
import {
	StyledHomePageContainer,
	ImageContainer,
	Image,
	ReverseImageContainer,
	ContainerWrapper,
	CenterText,
} from './homePage.styles';
import AgentLoading from './loadingPage';
import AgentSlider from '../components/agent/agentSlider';

const HomePage: React.FC = () => {
	const dispatch = useDispatch();
	const agents = useSelector((state: any) => state.agents.agents);
	const { data: agentsData, isLoading: agentsLoading } = useAgents();
	const [initialLoading, setInitialLoading] = useState(true);

	useEffect(() => {
		if (agentsData) {
			dispatch(setAgents(agentsData));
		}
	}, [agentsData, dispatch]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setInitialLoading(false);
		}, 300);
		return () => clearTimeout(timer);
	}, []);

	if (initialLoading || agentsLoading) {
		return <AgentLoading />;
	}

	const sortedAgents = [...agents].sort((a, b) => a.displayName.localeCompare(b.displayName));

	return (
		<>
			<AgentSlider />
			<StyledHomePageContainer>
				<CenterText data-text='Valorant'>Valorant</CenterText>
				<ContainerWrapper>
					<ImageContainer>
						{[...sortedAgents, ...agentsData, ...sortedAgents].map((agent: any, index) => (
							<Image key={`${agent.uuid}-1-${index}`} src={agent.displayIcon} alt={agent.displayName} />
						))}
					</ImageContainer>
				</ContainerWrapper>
				<ContainerWrapper>
					<ReverseImageContainer>
						{[...agentsData, ...sortedAgents, ...agentsData].map((agent: any, index) => (
							<Image key={`${agent.uuid}-2-${index}`} src={agent.displayIcon} alt={agent.displayName} />
						))}
					</ReverseImageContainer>
				</ContainerWrapper>
				<ContainerWrapper>
					<ImageContainer>
						{[...sortedAgents, ...agentsData, ...sortedAgents].map((agent: any, index) => (
							<Image key={`${agent.uuid}-3-${index}`} src={agent.displayIcon} alt={agent.displayName} />
						))}
					</ImageContainer>
				</ContainerWrapper>
				<ContainerWrapper>
					<ReverseImageContainer>
						{[...agentsData, ...sortedAgents, ...agentsData].map((agent: any, index) => (
							<Image key={`${agent.uuid}-4-${index}`} src={agent.displayIcon} alt={agent.displayName} />
						))}
					</ReverseImageContainer>
				</ContainerWrapper>
			</StyledHomePageContainer>
		</>
	);
};

export default HomePage;
