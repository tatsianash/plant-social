import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import React from "react";
import { fetchPosts, postsQueryKey } from "../api/api";

import PostPreview from "../components/posts/PostPreview";
import { Stack } from "@mui/material";

const FeedPage = () => {
	const { data, isLoading, isError, isSuccess } = useQuery({
		queryKey: postsQueryKey,
		queryFn: fetchPosts,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (!data || isError) {
		return <div>Posts not found. Please try again</div>;
	}

	if (isSuccess) {
		return (
			<Stack spacing={4} padding={2} width={"100%"}>
				{data.map((post) => (
					<PostPreview key={post.id} post={post} />
				))}
			</Stack>
		);
	}
};

export default FeedPage;
