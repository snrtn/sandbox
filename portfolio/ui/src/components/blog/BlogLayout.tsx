import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import { BlogLayoutContainer } from './blogLayout.styles';

interface BlogLayoutProps {
	children: ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
	return (
		<BlogLayoutContainer>
			<Grid container spacing={2}>
				{React.Children.map(children, (child) => (
					<Grid item xs={12} sm={6} md={4} lg={3}>
						{child}
					</Grid>
				))}
			</Grid>
		</BlogLayoutContainer>
	);
};

export default BlogLayout;
