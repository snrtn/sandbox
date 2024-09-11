import { useEffect } from 'react';
import { Job } from '../components';

const ExperienceView = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Job />
		</div>
	);
};

export default ExperienceView;
