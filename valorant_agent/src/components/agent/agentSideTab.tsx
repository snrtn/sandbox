import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery, useTheme, Drawer } from '@mui/material';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { StyledBox, StyledTabs, StyledTab, DrawerContainer, AnimatedIconButton } from './agentSideTab.styles';

interface AgentSideTabProps {
	abilities: { displayName: string }[];
	onTabChange: (tab: string) => void;
}

const AgentSideTab: React.FC<AgentSideTabProps> = ({ abilities, onTabChange }) => {
	const navigate = useNavigate();
	const { agentName, tab } = useParams<{ agentName: string; tab?: string }>();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
		onTabChange(newValue);
		navigate(`/agent/${encodeURIComponent(agentName || '')}/${encodeURIComponent(newValue)}`);
		setDrawerOpen(false);
	};

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}
		setDrawerOpen(open);
	};

	const decodedTab = tab ? decodeURIComponent(tab) : 'info';

	return (
		<>
			{isMobile ? (
				<>
					<AnimatedIconButton edge='start' color='inherit' aria-label='menu' onClick={toggleDrawer(true)}>
						<FaAngleDoubleLeft />
					</AnimatedIconButton>
					<Drawer
						anchor='right'
						open={drawerOpen}
						onClose={toggleDrawer(false)}
						PaperProps={{ style: { backgroundColor: '#0E1822' } }}
					>
						<DrawerContainer onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
							<StyledTabs
								orientation='vertical'
								variant='scrollable'
								value={decodedTab}
								aria-label='Agent details tabs'
								onChange={handleTabChange}
							>
								<StyledTab label='Agent Info' value='info' />
								{abilities.map((ability, index) => (
									<StyledTab label={ability.displayName} value={ability.displayName} key={index} />
								))}
							</StyledTabs>
						</DrawerContainer>
					</Drawer>
				</>
			) : (
				<StyledBox>
					<StyledTabs
						orientation='vertical'
						variant='scrollable'
						value={decodedTab}
						aria-label='Agent details tabs'
						onChange={handleTabChange}
					>
						<StyledTab label='Agent Info' value='info' />
						{abilities.map((ability, index) => (
							<StyledTab label={ability.displayName} value={ability.displayName} key={index} />
						))}
					</StyledTabs>
				</StyledBox>
			)}
		</>
	);
};

export default AgentSideTab;
