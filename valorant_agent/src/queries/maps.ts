import valorantDataHook from '../hooks/valorantDataHook';
import { setMaps } from '../store/mapsSlice';

export const useMaps = valorantDataHook('maps', setMaps);
