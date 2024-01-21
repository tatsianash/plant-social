import { Card, CardContent, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PostEngagement from "./postEngagement";
import { Post } from "../../types/post";

interface PostPreviewProps {
	post: Post;
}
const PostPreview = ({ post }: PostPreviewProps) => {
	return (
		<Card key={post.id}>
			<CardContent>
				<Typography variant="h5" fontWeight="bold" color="primary">
					{post.title}
					<span style={{ color: "gray" }}>&nbsp;by&nbsp;</span>
					<Typography
						variant="h5"
						color="secondary.dark"
						fontWeight="bold"
						component={Link}
						to={`/user/${post.author.id}`}
						sx={{ textDecoration: "none" }}
					>
						{post.author.displayName}
					</Typography>
				</Typography>

				<PostEngagement commentsCount={post.commentsCount} likesCount={post.likesCount} />
			</CardContent>
			<CardContent sx={{ display: "flex", justifyContent: "center" }}>
				<Button
					color="secondary"
					variant="outlined"
					component={Link}
					to={`/post/${post.id}`}
				>
					View Post
				</Button>
			</CardContent>
		</Card>
	);
};

export default PostPreview;
