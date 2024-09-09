import valorantDataHook from '../hooks/valorantDataHook';
import { setWeapons } from '../store/weaponsSlice';

export const useWeapons = valorantDataHook('weapons', setWeapons);
