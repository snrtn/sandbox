import valorantDataHook from '../hooks/valorantDataHook';
import { setAgents } from '../store/agentsSlice';

export const useAgents = valorantDataHook('agents', setAgents);
