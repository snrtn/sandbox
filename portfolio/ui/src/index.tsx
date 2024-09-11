// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './translate/i18n';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import App from './App';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from './redux/store';

const theme = createTheme();
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Router>
		<MuiThemeProvider theme={theme}>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</Provider>
		</MuiThemeProvider>
	</Router>,
);
