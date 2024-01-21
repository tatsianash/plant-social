import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";

import { fetchPostById, postIdQueryKey } from "../api/api";
import { Card, CardContent, Typography } from "@mui/material";

const PostPage = () => {
	const { id } = useParams();
	const { data: post, isLoading } = useQuery({
		queryKey: postIdQueryKey,
		queryFn: () => fetchPostById(id),
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!post) {
		return <div>Post not found</div>;
	}
	if (post) {
		return (
			<Card>
				<CardContent>
					<Typography variant="h5" fontWeight="bold" color="primary">
						{post.title} by{" "}
						<Link to={`/user/${post.author.id}`}>{post.author.displayName}</Link>
					</Typography>
				</CardContent>
			</Card>
		);
	}
};

export default PostPage;
