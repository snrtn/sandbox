import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

const LayoutView: React.FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default LayoutView;
