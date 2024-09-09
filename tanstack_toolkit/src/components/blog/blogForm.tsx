import React, { useState, useEffect } from 'react';
import { useCreateBlog, useUpdateBlog } from '../../services/scrviceBlog';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setSelectedBlog, setIsEditing } from '../../redux/slices/sliceBlog';

const BlogForm: React.FC = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const selectedBlog = useSelector((state: RootState) => state.blog.selectedBlog);
	const isEditing = useSelector((state: RootState) => state.blog.isEditing);
	const createBlog = useCreateBlog();
	const updateBlog = useUpdateBlog();
	const dispatch = useDispatch();

	useEffect(() => {
		if (selectedBlog) {
			setTitle(selectedBlog.title);
			setContent(selectedBlog.content);
		}
	}, [selectedBlog]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (isEditing && selectedBlog) {
			await updateBlog.mutateAsync({ ...selectedBlog, title, content });
		} else {
			await createBlog.mutateAsync({ title, content });
		}
		setTitle('');
		setContent('');
		dispatch(setSelectedBlog(null));
		dispatch(setIsEditing(false));
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Title</label>
				<input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
			</div>
			<div>
				<label>Content</label>
				<textarea value={content} onChange={(e) => setContent(e.target.value)} />
			</div>
			<button type='submit'>{isEditing ? 'Update Blog' : 'Create Blog'}</button>
		</form>
	);
};

export default BlogForm;
