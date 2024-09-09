import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutView from './view/layoutView';
import HommeView from './view/homeView';
import NotFoundView from './view/notFoundView';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<LayoutView />}>
				<Route index element={<HommeView />} />
				<Route path='*' element={<NotFoundView />} />
			</Route>
		</Routes>
	);
};

export default App;
