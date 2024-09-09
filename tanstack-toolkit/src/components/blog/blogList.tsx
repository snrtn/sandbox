import React from 'react';
import { useFetchBlogs, useDeleteBlog } from '../../services/scrviceBlog';
import { useDispatch } from 'react-redux';
import { setSelectedBlog, setIsEditing } from '../../redux/slices/sliceBlog';

const BlogList: React.FC = () => {
	const { data: blogs, error, isLoading } = useFetchBlogs();
	const deleteBlog = useDeleteBlog();
	const dispatch = useDispatch();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	const handleDelete = (id: number) => {
		deleteBlog.mutate(id);
	};

	return (
		<div>
			<h1>Blog List</h1>
			<ul>
				{blogs?.map((blog) => (
					<li key={blog.id}>
						<h2>{blog.title}</h2>
						<p>{blog.content}</p>
						<button
							onClick={() => {
								dispatch(setSelectedBlog(blog));
								dispatch(setIsEditing(true));
							}}
						>
							Edit
						</button>
						<button onClick={() => handleDelete(blog.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BlogList;
