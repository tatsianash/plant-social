import { Link } from "react-router-dom";
import { Button, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { User } from "../../types/user";

interface PostsSectionProps {
	posts: User["posts"];
}
const PostsSection = ({ posts }: PostsSectionProps) => {
	if (posts?.length === 0)
		return (
			<Typography variant="body1" color="secondary.dark">
				No posts yet
			</Typography>
		);

	return (
		<CardContent>
			<Typography variant="body1" color="secondary.dark">
				Posts:
			</Typography>
			{posts.map((post) => (
				<Stack
					key={post.id}
					direction="row"
					gap={1}
					alignItems="center"
					spacing={2}
					justifyContent="space-between"
				>
					<Typography color="primary" component={Link} to={`/post/${post.id}`}>
						{post.title}
					</Typography>
					<Typography color="divider">
						{new Date(post.createdAt).toLocaleString()}&nbsp;
					</Typography>
					<Button
						color="secondary"
						variant="outlined"
						component={Link}
						to={`/post/${post.id}`}
					>
						View Post
					</Button>
				</Stack>
			))}
		</CardContent>
	);
};

export default PostsSection;
