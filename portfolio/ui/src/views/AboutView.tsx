/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react';
import { Kim } from '../components';

const AboutView = () => {
	const [scrollEnabled, setScrollEnabled] = useState(true);
	const [scrollTop, setScrollTop] = useState(0);

	const handleScrollToEnd = useCallback(() => {
		const container = document.getElementById('about-view');
		if (container) {
			setScrollTop(container.scrollTop);
			setScrollEnabled(false);
		}
	}, [scrollTop]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const container = document.getElementById('about-view');
		if (container) {
			const handleScroll = () => {
				const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight;
				if (isAtBottom) {
					handleScrollToEnd();
				}
			};
			container.addEventListener('scroll', handleScroll);
			return () => {
				container.removeEventListener('scroll', handleScroll);
			};
		}
	}, [handleScrollToEnd]);

	return (
		<div id='about-view' style={{ height: '100%', overflowY: scrollEnabled ? 'auto' : 'hidden' }}>
			<Kim scrollEnabled={scrollEnabled} onScrollToEnd={handleScrollToEnd} />
		</div>
	);
};

export default AboutView;
