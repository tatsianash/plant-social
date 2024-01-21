import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchPosts, postsQueryKey } from "../api/api";
import { Card, CardContent, Stack, Typography } from "@mui/material";

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
					<Card key={post.id}>
						<CardContent>
							<Typography variant="h5" fontWeight="bold" color="primary">
								{post.title} by {post.author.displayName}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Stack>
		);
	}
};

export default FeedPage;
