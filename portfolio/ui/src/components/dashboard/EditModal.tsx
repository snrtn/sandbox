/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Autocomplete, Chip } from '@mui/material';
import { Post } from '../../interfaces';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface EditModalProps {
	isOpen: boolean;
	onClose: () => void;
	post: Post | null;
	onSubmit: (updatedPost: Post, image: File | null) => void;
	onChange: (field: string, value: string) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, post, onSubmit, onChange }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [tags, setTags] = useState<string[]>([]);
	const [image, setImage] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);

	useEffect(() => {
		if (post) {
			setTitle(post.title);
			setContent(post.content);
			setTags(post.tags || []); // Ensure tags is always an array
			if (post.image) {
				setImagePreview(post.image);
			}
		}
	}, [post]);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setImage(e.target.files[0]);
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
			reader.readAsDataURL(e.target.files[0]);
		} else {
			setImage(null);
			setImagePreview(null);
		}
	};

	const handleRemoveImage = () => {
		setImage(null);
		setImagePreview(null);
	};

	const handleSave = () => {
		if (post) {
			const updatedPost = { ...post, title, content, tags };
			onSubmit(updatedPost, image);
		}
	};

	return (
		<Modal open={isOpen} onClose={onClose}>
			<Box sx={{ padding: '60px', backgroundColor: 'white', margin: '100px auto', width: '600px' }}>
				<Typography variant='h6'>Edit Post</Typography>
				<TextField label='Title' value={title} onChange={(e) => setTitle(e.target.value)} fullWidth required />
				<ReactQuill value={content} onChange={setContent} />
				<Autocomplete
					multiple
					freeSolo
					options={[]}
					value={tags} // Ensure value is always an array
					onChange={(event, newValue) => setTags(newValue as string[])}
					renderTags={(value: readonly string[], getTagProps) =>
						value.map((option: string, index: number) => <Chip key={index} variant='outlined' label={option} />)
					}
					renderInput={(params) => <TextField {...params} variant='outlined' label='Tags' placeholder='Add tags' />}
				/>
				<Button variant='contained' component='label'>
					Upload Image
					<input type='file' hidden accept='image/*' onChange={handleImageChange} />
				</Button>
				{imagePreview && (
					<Box sx={{ mt: 2, textAlign: 'center' }}>
						<img src={imagePreview} alt='Preview' style={{ maxWidth: '100%', maxHeight: 200 }} />
						<Button variant='contained' color='secondary' onClick={handleRemoveImage} sx={{ mt: 1 }}>
							Remove Image
						</Button>
					</Box>
				)}
				<Button onClick={handleSave} variant='contained' color='primary'>
					Save
				</Button>
			</Box>
		</Modal>
	);
};

export default EditModal;
