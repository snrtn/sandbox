import React from 'react';
import { Modal, Box } from '@mui/material';

interface ImageModalProps {
	isOpen: boolean;
	onClose: () => void;
	imageSrc: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc }) => {
	return (
		<Modal open={isOpen} onClose={onClose}>
			<Box sx={{ padding: '100px', backgroundColor: 'white', margin: '100px auto', width: '600px' }}>
				<img src={imageSrc} alt='Content' style={{ maxWidth: '100%' }} />
			</Box>
		</Modal>
	);
};

export default ImageModal;
