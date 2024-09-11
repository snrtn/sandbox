import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

interface DeleteModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onSubmit }) => {
	return (
		<Modal open={isOpen} onClose={onClose}>
			<Box sx={{ padding: '20px', backgroundColor: 'white', margin: '100px auto', width: '300px' }}>
				<Typography variant='h6'>Delete Post</Typography>
				<Typography>Are you sure you want to delete this post?</Typography>
				<Button onClick={onSubmit}>Yes</Button>
				<Button onClick={onClose}>No</Button>
			</Box>
		</Modal>
	);
};

export default DeleteModal;
