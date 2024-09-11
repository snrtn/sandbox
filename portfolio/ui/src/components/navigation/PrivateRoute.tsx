import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getCookie } from '../../redux/modules/auth';

interface PrivateRouteProps {
	redirectPath?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ redirectPath = '/auth' }) => {
	const { token } = useSelector((state: RootState) => state.auth);
	const savedToken = getCookie('accessToken');

	return token || savedToken ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default PrivateRoute;
