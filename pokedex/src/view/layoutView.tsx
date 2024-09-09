import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/header';

const LayoutView: React.FC = () => {
	return (
		<>
			<Header
				toggleMenu={function (): void {
					throw new Error('Function not implemented.');
				}}
			/>
			<Outlet />
		</>
	);
};

export default LayoutView;
