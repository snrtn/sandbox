import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/navigation/header';

const LayoutPage: React.FC = () => {
	const [selectedAgent, setSelectedAgent] = useState('');
	const navigate = useNavigate();

	const handleAgentSelect = (agentName: string) => {
		setSelectedAgent(agentName);
		navigate(`/agent/${encodeURIComponent(agentName)}`);
	};

	return (
		<>
			<Header onAgentSelect={handleAgentSelect} />
			<Outlet context={[selectedAgent, setSelectedAgent]} />
		</>
	);
};

export default LayoutPage;
