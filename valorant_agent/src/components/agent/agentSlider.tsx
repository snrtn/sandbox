import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay } from 'react-icons/fa';
import { Box, Tooltip, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
	SliderContainer,
	SliderWrapper,
	Slide,
	TextOverlay,
	NavButton,
	PauseButton,
	ProgressBarContainer,
	TooltipContent,
	ProgressBar,
} from './agentSlider.styles';

const AgentSlider: React.FC = () => {
	const agents = useSelector((state: any) => state.agents.agents);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [progress, setProgress] = useState(0);
	const sliderRef = useRef<HTMLDivElement>(null);
	const progressRef = useRef<NodeJS.Timeout | null>(null);
	const navigate = useNavigate();

	const filteredAgents = agents.filter((agent: any, index: number) => {
		if (agent.displayName === 'Sova') {
			return agents.findIndex((a: any) => a.displayName === 'Sova') === index;
		}
		return true;
	});

	const handlePrev = useCallback(() => {
		setCurrentIndex((prev) => (prev === 0 ? filteredAgents.length - 1 : prev - 1));
		setProgress(0);
	}, [filteredAgents.length]);

	const handleNext = useCallback(() => {
		setCurrentIndex((prev) => (prev === filteredAgents.length - 1 ? 0 : prev + 1));
		setProgress(0);
	}, [filteredAgents.length]);

	const togglePause = () => {
		setIsPaused((prev) => !prev);
	};

	useEffect(() => {
		if (!isPaused) {
			progressRef.current = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) {
						handleNext();
						return 0;
					}
					return prev + 1;
				});
			}, 50);
		} else if (progressRef.current) {
			clearInterval(progressRef.current);
		}

		return () => {
			if (progressRef.current) {
				clearInterval(progressRef.current);
			}
		};
	}, [isPaused, handleNext]);

	useEffect(() => {
		setProgress(0);
	}, [currentIndex]);

	const handleProgressClick = (index: number) => {
		setCurrentIndex(index);
		setProgress(0);
	};

	const handleAgentPage = () => {
		navigate('/agent');
	};

	return (
		<SliderContainer>
			<SliderWrapper ref={sliderRef} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
				{filteredAgents.map((agent: any, index: number) => (
					<Slide key={agent.uuid}>
						<img src={agent.fullPortrait} alt={agent.displayName} />
					</Slide>
				))}
			</SliderWrapper>
			<TextOverlay>
				<h1>{filteredAgents[currentIndex]?.displayName}</h1>
				<h2>Agent Type</h2>
				<p>{filteredAgents[currentIndex]?.description}</p>
				<button style={{ marginRight: '2rem' }} onClick={handleAgentPage}>
					Go to Agent Page
				</button>
				<ProgressBarContainer>
					{filteredAgents.map((agent: any, index: number) => (
						<Box key={agent.uuid}>
							<Tooltip
								title={
									<TooltipContent>
										<img src={agent.displayIcon} alt={agent.displayName} />
										<Typography variant='body1'>{agent.displayName}</Typography>
									</TooltipContent>
								}
								placement='top'
								arrow
							>
								<Box onClick={() => handleProgressClick(index)}>
									<ProgressBar
										variant='determinate'
										value={index === currentIndex ? progress : index < currentIndex ? 100 : 0}
									/>
								</Box>
							</Tooltip>
						</Box>
					))}
				</ProgressBarContainer>
				<NavButton left onClick={handlePrev}>
					<FaArrowLeft />
				</NavButton>
				<NavButton onClick={handleNext}>
					<FaArrowRight />
				</NavButton>
				<PauseButton onClick={togglePause}>{isPaused ? <FaPlay /> : <FaPause />}</PauseButton>
			</TextOverlay>
		</SliderContainer>
	);
};

export default AgentSlider;
