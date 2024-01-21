import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

import { fetchPostById, postIdQueryKey } from "../api/api";

import PostDetails from "../components/posts/PostDetails";

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
		return <PostDetails post={post} />;
	}
};

export default PostPage;
