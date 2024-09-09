import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import AgentDetail from './agentDetail';

const AgentDetailsWrapper: React.FC = () => {
	const { agentName } = useParams<{ agentName: string }>();
	const navigate = useNavigate();
	const agents = useSelector((state: any) => state.agents.agents);

	const sortedAgents = [...agents].sort((a, b) => a.displayName.localeCompare(b.displayName));

	useEffect(() => {
		if (!agentName && sortedAgents.length > 0) {
			navigate(`/agent/${encodeURIComponent(sortedAgents[0].displayName)}`);
		}
	}, [agentName, sortedAgents, navigate]);

	let agent = sortedAgents.find((agent: any) => agent.displayName === agentName);

	if (!agent && sortedAgents.length > 0) {
		agent = sortedAgents[0];
		if (agent) {
			navigate(`/agent/${encodeURIComponent(agent.displayName)}`);
		}
	}

	if (!agent) {
		return <p>No agents available</p>;
	}

	return <AgentDetail agentName={agent.displayName} />;
};

export default AgentDetailsWrapper;
