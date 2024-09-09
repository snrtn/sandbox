import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchAgent from '../data/fetchAgent';

const valorantDataHook = (endpoint: string, actionCreator: any) => {
	return () => {
		const dispatch = useDispatch();

		const queryResult = useQuery({
			queryKey: [endpoint],
			queryFn: () => fetchAgent(endpoint),
		});

		useEffect(() => {
			if (queryResult.isSuccess) {
				dispatch(actionCreator(queryResult.data));
			}
		}, [queryResult.isSuccess, queryResult.data, dispatch]);

		return queryResult;
	};
};

export default valorantDataHook;
