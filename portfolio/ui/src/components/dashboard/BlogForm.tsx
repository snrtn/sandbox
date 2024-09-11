import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Autocomplete, Chip } from '@mui/material';
import { useBlog } from '../../hooks';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useAuth from '../../hooks/useAuth';

const BlogForm: React.FC = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [tags, setTags] = useState<string[]>([]);
	const [image, setImage] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const { createPost, status, error } = useBlog();
	const { user } = useAuth();

	useEffect(() => {
		if (image) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
			reader.readAsDataURL(image);
		} else {
			setImagePreview(null);
		}
	}, [image]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!user) {
			alert('로그인한 사용자가 없습니다.');
			return;
		}

		const formData = new FormData();
		formData.append('title', title);
		formData.append('content', content);
		formData.append('tags', tags.join(','));
		formData.append('author', user._id);
		if (image) {
			formData.append('image', image);
		}

		// FormData 내용 확인 (개별 출력)
		console.log('Title:', formData.get('title'));
		console.log('Content:', formData.get('content'));
		console.log('Tags:', formData.get('tags'));
		console.log('Author:', formData.get('author'));
		if (formData.get('image')) {
			console.log('Image:', formData.get('image'));
		}

		createPost(formData);
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setImage(e.target.files[0]);
		} else {
			setImage(null);
		}
	};

	const handleRemoveImage = () => {
		setImage(null);
	};

	return (
		<Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
			<Typography variant='h4'>Create a New Post</Typography>
			{status === 'loading' && <Typography>Loading...</Typography>}
			{status === 'failed' && <Typography color='error'>{error}</Typography>}
			<TextField label='Title' value={title} onChange={(e) => setTitle(e.target.value)} fullWidth required />
			<ReactQuill value={content} onChange={setContent} />
			<Autocomplete
				multiple
				freeSolo
				options={[]}
				value={tags}
				onChange={(event, newValue) => setTags(newValue as string[])}
				renderTags={(value: readonly string[], getTagProps) =>
					value.map((option: string, index: number) => {
						const tagProps = getTagProps({ index });
						return (
							<Chip
								key={index}
								variant='outlined'
								label={option}
								className={tagProps.className}
								disabled={tagProps.disabled}
								data-tag-index={tagProps['data-tag-index']}
								tabIndex={tagProps.tabIndex}
								onDelete={tagProps.onDelete}
							/>
						);
					})
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
			<Button type='submit' variant='contained' color='primary'>
				Submit
			</Button>
		</Box>
	);
};

export default BlogForm;
