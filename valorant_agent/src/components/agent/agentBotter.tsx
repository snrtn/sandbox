import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import { AgentBotterContainer, AgentBotterSlider, NavButton, AgentItem } from './agentBotter.styles';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Grid from '@mui/material/Grid';

interface AgentBotterProps {
	agents: any[];
	activeAgent: string;
	onAgentClick: (agentName: string) => void;
}

const AgentBotter: React.FC<AgentBotterProps> = ({ agents, activeAgent, onAgentClick }) => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();
	const theme = useTheme();
	const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [selectedAgent, setSelectedAgent] = useOutletContext<[string, React.Dispatch<React.SetStateAction<string>>]>();

	const [sortedAgents, setSortedAgents] = useState<any[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [initialSetupDone, setInitialSetupDone] = useState(false);
	const itemsPerSlide = isMobile ? 2 : isTablet ? 2 : 4;

	const scrollLeft = () => {
		const newIndex = Math.max(currentIndex - itemsPerSlide, 0);
		setCurrentIndex(newIndex);
	};

	const scrollRight = () => {
		const newIndex = Math.min(currentIndex + itemsPerSlide, sortedAgents.length - itemsPerSlide);
		setCurrentIndex(newIndex);
	};

	useEffect(() => {
		const sorted = [...agents]
			.sort((a, b) => a.displayName.localeCompare(b.displayName))
			.filter((agent, index, self) => index === self.findIndex((a) => a.displayName === agent.displayName));
		setSortedAgents(sorted);

		if (!initialSetupDone && sorted.length > 0) {
			const encodedName = encodeURIComponent(sorted[0].displayName);
			onAgentClick(sorted[0].displayName);
			navigate(`/agent/${encodedName}`);
			setInitialSetupDone(true);
		}
	}, [agents, onAgentClick, navigate, initialSetupDone]);

	useEffect(() => {
		if (selectedAgent) {
			const agentIndex = sortedAgents.findIndex((agent) => agent.displayName === selectedAgent);
			if (agentIndex !== -1) {
				const newIndex = Math.max(
					0,
					Math.min(agentIndex - Math.floor(itemsPerSlide / 2), sortedAgents.length - itemsPerSlide),
				);
				setCurrentIndex(newIndex);
			}
		}
	}, [selectedAgent, sortedAgents, itemsPerSlide]);

	const handleAgentClick = (agentName: string) => {
		setSelectedAgent('');
		const encodedName = encodeURIComponent(agentName);
		onAgentClick(agentName);
		navigate(`/agent/${encodedName}`);
	};

	return (
		<AgentBotterContainer>
			<>
				<NavButton onClick={scrollLeft} className='left' disabled={currentIndex === 0} isDisabled={currentIndex === 0}>
					<FaArrowLeft />
				</NavButton>
				<AgentBotterSlider ref={sliderRef}>
					<Grid container spacing={2}>
						{sortedAgents.slice(currentIndex, currentIndex + itemsPerSlide).map((agent: any) => (
							<Grid item xs={6} sm={6} md={3} key={agent.uuid}>
								<AgentItem
									className={
										(activeAgent === agent.displayName && !selectedAgent) || selectedAgent === agent.displayName
											? 'active'
											: ''
									}
									onClick={() => handleAgentClick(agent.displayName)}
								>
									<img src={agent.displayIcon} alt={agent.displayName} width='50' height='50' />
									<h2>{agent.displayName}</h2>
								</AgentItem>
							</Grid>
						))}
					</Grid>
				</AgentBotterSlider>
				<NavButton
					onClick={scrollRight}
					className='right'
					disabled={currentIndex + itemsPerSlide >= sortedAgents.length}
					isDisabled={currentIndex + itemsPerSlide >= sortedAgents.length}
				>
					<FaArrowRight />
				</NavButton>
			</>
		</AgentBotterContainer>
	);
};

export default AgentBotter;
