import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

interface ContentModalProps {
	isOpen: boolean;
	onClose: () => void;
	content: string;
}

const ContentModal: React.FC<ContentModalProps> = ({ isOpen, onClose, content }) => {
	return (
		<Modal open={isOpen} onClose={onClose}>
			<Box sx={{ padding: '100px', backgroundColor: 'white', margin: '100px auto', width: '600px' }}>
				<Typography variant='h6'>Content</Typography>
				<Typography>{content}</Typography>
			</Box>
		</Modal>
	);
};

export default ContentModal;
