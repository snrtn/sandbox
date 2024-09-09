import React from 'react';
import { StyledLoadingContainer, LoadingText, ProgressBarContainer, ProgressBar } from './loadingPage.styles';

const AgentLoading: React.FC = () => {
	return (
		<StyledLoadingContainer>
			<LoadingText>LOADING . . . . . . .</LoadingText>
			<ProgressBarContainer>
				<ProgressBar />
			</ProgressBarContainer>
		</StyledLoadingContainer>
	);
};

export default AgentLoading;
