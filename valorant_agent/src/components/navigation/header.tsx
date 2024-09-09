import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
	Toolbar,
	Button,
	TextField,
	Box,
	List,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Divider,
	Typography,
	ListItem,
	IconButton,
} from '@mui/material';
import { FaSearch, FaTimes } from 'react-icons/fa';
import CustomAppBar from '../mui/customAppBar';
import { useSelector } from 'react-redux';
import {
	NavLink,
	Logo,
	SearchBox,
	Dropdown,
	FullScreenSearchContainer,
	ListItemStyled,
	CloseButton,
} from './header.styles';

const Header: React.FC<{ onAgentSelect: (agentName: string) => void }> = ({ onAgentSelect }) => {
	const [query, setQuery] = useState('');
	const [searchOpen, setSearchOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const agents = useSelector((state: any) => state.agents.agents);
	const navigate = useNavigate();
	const location = useLocation();

	const handleAgentsClick = () => {
		const sortedAgents = [...agents].sort((a, b) => a.displayName.localeCompare(b.displayName));
		if (sortedAgents.length > 0) {
			const firstAgent = sortedAgents[0];
			navigate(`/agent/${encodeURIComponent(firstAgent.displayName)}`);
			onAgentSelect(firstAgent.displayName);
		}
	};

	const filteredAgentsAndSkills = agents
		.flatMap((agent: any) => [
			{ type: 'agent', ...agent },
			...agent.abilities.map((ability: any, index: number) => ({
				type: 'skill',
				agentName: agent.displayName,
				...ability,
				key: `${agent.uuid}-${ability.displayName}-${index}`,
			})),
		])
		.filter((item: any, index: number, self: any[]) => {
			const foundIndex = self.findIndex(
				(i: any) => i.displayName === item.displayName && i.agentName === item.agentName,
			);
			return foundIndex === index && item.displayName.toLowerCase().includes(query.toLowerCase());
		});

	const handleItemClick = (item: any) => {
		setQuery('');
		onAgentSelect(item.type === 'agent' ? item.displayName : item.agentName);
		if (item.type === 'skill') {
			navigate(
				`/agent/${encodeURIComponent(item.agentName)}/${encodeURIComponent(
					item.displayName,
				)}?selectedAgent=${encodeURIComponent(item.agentName)}`,
			);
		} else {
			navigate(`/agent/${encodeURIComponent(item.displayName)}?selectedAgent=${encodeURIComponent(item.displayName)}`);
		}
		setSearchOpen(false);
	};

	const handleOpenSearch = () => {
		setSearchOpen(true);
		setTimeout(() => {
			if (inputRef.current) {
				inputRef.current.focus();
			}
		}, 100);
	};

	const handleCloseSearch = () => {
		setSearchOpen(false);
	};

	useEffect(() => {
		if (searchOpen && inputRef.current) {
			inputRef.current.focus();
		}
	}, [searchOpen]);

	const isAgentPage = location.pathname.startsWith('/agent');

	return (
		<CustomAppBar position='fixed'>
			<Toolbar>
				<NavLink to='/'>
					<Logo src={'/assets/logoText.png'} alt='Logo' />
				</NavLink>
				<Button color='inherit' onClick={handleAgentsClick}>
					Agents
				</Button>
				<NavLink to='/map'>
					<Button color='inherit'>Maps</Button>
				</NavLink>
				{isAgentPage && (
					<SearchBox>
						<IconButton onClick={handleOpenSearch}>
							<FaSearch style={{ color: 'white' }} />
						</IconButton>
					</SearchBox>
				)}
			</Toolbar>
			<FullScreenSearchContainer
				fullScreen
				open={searchOpen}
				onClose={handleCloseSearch}
				BackdropProps={{ onClick: handleCloseSearch }}
			>
				<Box sx={{ p: 2 }} onClick={(e) => e.stopPropagation()}>
					<CloseButton onClick={handleCloseSearch}>
						<FaTimes />
					</CloseButton>
					<Typography variant='h6' sx={{ color: '#fff', mb: 2 }}>
						Press ESC to clear search
					</Typography>
					<TextField
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder='Search agents or skills...'
						variant='outlined'
						size='medium'
						fullWidth
						InputProps={{
							style: { color: 'white', borderColor: 'white', fontSize: '1.5rem' },
						}}
						inputRef={inputRef}
						sx={{
							'& .MuiOutlinedInput-root': {
								'& fieldset': {
									borderColor: 'white',
								},
								'&:hover fieldset': {
									borderColor: 'white',
								},
								'&.Mui-focused fieldset': {
									borderColor: 'white',
								},
							},
						}}
					/>
					{query && (
						<Dropdown>
							<List>
								<ListItem>
									<ListItemText primary='Agents' style={{ fontWeight: 'bold' }} />
								</ListItem>
								{filteredAgentsAndSkills
									.filter((item: any) => item.type === 'agent')
									.map((item: any, index: number) => (
										<ListItemStyled key={`${item.uuid}-${index}`} onClick={() => handleItemClick(item)}>
											<ListItemAvatar>
												<Avatar src={item.displayIcon} alt={item.displayName} />
											</ListItemAvatar>
											<ListItemText primary={item.displayName} secondary={<span>Agent</span>} />
										</ListItemStyled>
									))}
								<Divider style={{ backgroundColor: '#fff' }} />
								<ListItem>
									<ListItemText primary='Skills' style={{ fontWeight: 'bold' }} />
								</ListItem>
								{filteredAgentsAndSkills
									.filter((item: any) => item.type === 'skill')
									.map((item: any, index: number) => (
										<ListItemStyled key={item.key} onClick={() => handleItemClick(item)}>
											<ListItemAvatar>
												<Avatar src={item.displayIcon} alt={item.displayName} />
											</ListItemAvatar>
											<ListItemText
												primary={item.displayName}
												secondary={<span style={{ color: '#fff' }}>Skill of {item.agentName}</span>}
											/>
										</ListItemStyled>
									))}
							</List>
						</Dropdown>
					)}
				</Box>
			</FullScreenSearchContainer>
		</CustomAppBar>
	);
};

export default Header;
