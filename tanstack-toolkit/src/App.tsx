import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from './redux/store';
import BlogList from './components/blog/blogList';
import BlogForm from './components/blog/blogForm';

const queryClient = new QueryClient();

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<div>
					<h1>Blog Application</h1>
					<BlogForm />
					<BlogList />
				</div>
			</QueryClientProvider>
		</Provider>
	);
};

export default App;
