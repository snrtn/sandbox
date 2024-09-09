import { createSlice } from '@reduxjs/toolkit';

interface Agent {
	uuid: string;
	displayName: string;
	description: string;
	abilities: any[];
}

interface AgentsState {
	agents: Agent[];
}

const initialState: AgentsState = {
	agents: [],
};

const agentsSlice = createSlice({
	name: 'agents',
	initialState,
	reducers: {
		setAgents: (state, action) => {
			state.agents = action.payload;
		},
	},
});

export const { setAgents } = agentsSlice.actions;
export default agentsSlice.reducer;
