import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAgents } from '../queries/agents';
import { Outlet } from 'react-router-dom';
import { setAgents } from '../store/agentsSlice';
import { AgentContainer } from './agentPage.styles';

import AgentBotter from '../components/agent/agentBotter';
import AgentLoading from './loadingPage';

const AgentPage: React.FC = () => {
	const dispatch = useDispatch();
	const agents = useSelector((state: any) => state.agents.agents);
	const { data: agentsData, isLoading: agentsLoading } = useAgents();
	const [initialLoading, setInitialLoading] = useState(true);
	const [activeAgent, setActiveAgent] = useState('');

	useEffect(() => {
		if (agentsData) {
			dispatch(setAgents(agentsData));
		}
	}, [agentsData, dispatch]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setInitialLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (agents.length > 0) {
			setActiveAgent(agents[0].displayName);
		}
	}, [agents]);

	const handleAgentClick = (agentName: string) => {
		setActiveAgent(agentName);
	};

	return (
		<AgentContainer>
			{initialLoading || agentsLoading ? (
				<AgentLoading />
			) : (
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<AgentBotter agents={agents} activeAgent={activeAgent} onAgentClick={handleAgentClick} />
					<div>
						<Outlet />
					</div>
				</div>
			)}
		</AgentContainer>
	);
};

export default AgentPage;
