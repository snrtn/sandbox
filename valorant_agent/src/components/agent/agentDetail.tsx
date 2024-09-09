import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import AgentSideTab from './agentSideTab';
import {
	Container,
	ContentBox,
	IofoDesc,
	InfoBox,
	BackgroundImage,
	PortraitImage,
	RoleBox,
	SkillBox,
	SkillContent,
	VideoBox,
	OverlayBox,
} from './agentDetail.styles';
import fetchVideo from '../../data/fetchVideo';

interface AgentDetailsProps {
	agentName?: string;
	tab?: string;
}

const AgentDetail: React.FC<AgentDetailsProps> = ({ agentName, tab }) => {
	const agents = useSelector((state: any) => state.agents.agents);
	const { agentName: paramAgentName, tab: paramTab } = useParams<{ agentName: string; tab?: string }>();
	const decodedAgentName = decodeURIComponent(agentName || paramAgentName || '');
	const selectedTab = tab || paramTab || 'info';
	const agent = agents.find((agent: any) => agent.displayName === decodedAgentName);
	const [videoId, setVideoId] = useState<string | null>(null);

	useEffect(() => {
		const getVideo = async () => {
			if (agent && selectedTab && selectedTab !== 'info') {
				const ability = agent.abilities.find((ability: any) => ability.displayName === selectedTab);
				if (ability) {
					const query = `${agent.displayName} ${ability.displayName}`;
					const video = await fetchVideo(query);
					setVideoId(video);
				}
			}
		};
		getVideo();
	}, [agent, selectedTab]);

	if (!agent) {
		return <p>Agent not found: {decodedAgentName}</p>;
	}

	const handleTabChange = (newTab: string) => {
		console.log(`Tab changed to: ${newTab}`);
	};

	const renderTabContent = () => {
		if (selectedTab === 'info' || !selectedTab) {
			return (
				<ContentBox agent={agent}>
					<InfoBox>
						<BackgroundImage src={agent.background} alt='Background' />
						<PortraitImage src={agent.fullPortrait} alt={agent.displayName} />
					</InfoBox>
					<IofoDesc>
						<h1>
							<strong>{agent.displayName}</strong>
						</h1>
						<h2>
							<strong>{agent.description}</strong>
						</h2>
						{agent.characterTags && (
							<p>
								<strong>{agent.characterTags.join(', ')}</strong>
							</p>
						)}
						<RoleBox>
							<img src={agent.role?.displayIcon} alt={agent.role?.displayName} width='50' height='50' />
							<Box ml={2}>
								<h3>
									<strong>{agent.role?.displayName}</strong>
								</h3>
								<h3>
									<strong>{agent.role?.description}</strong>
								</h3>
							</Box>
						</RoleBox>
					</IofoDesc>
				</ContentBox>
			);
		}

		const ability = agent.abilities.find((ability: any) => ability.displayName === selectedTab);

		return (
			<SkillBox>
				<SkillContent>
					<img src={ability?.displayIcon} alt={ability?.displayName} width='150' height='150' />
					<h1>{ability?.displayName}</h1>
					<h3>{ability?.description}</h3>
				</SkillContent>
				<VideoBox>
					{videoId ? (
						<>
							<iframe
								width='100%'
								height='315px'
								src={`https://www.youtube.com/embed/${videoId}?controls=0&loop=1&playlist=${videoId}&autoplay=1&modestbranding=1`}
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							></iframe>
							<OverlayBox />
						</>
					) : (
						<p>No video found</p>
					)}
				</VideoBox>
			</SkillBox>
		);
	};

	return (
		<Container>
			<Box sx={{ flex: 1 }}>{renderTabContent()}</Box>
			<AgentSideTab abilities={agent.abilities} onTabChange={handleTabChange} />
		</Container>
	);
};

export default AgentDetail;
