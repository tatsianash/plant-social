import React from "react";
import { Post } from "../../types/post";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Chip,
	Stack,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PostEngagement from "./postEngagement";

interface PostDetailsProps {
	post: Post;
}

const PostDetails = ({ post }: PostDetailsProps) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="h5" fontWeight="bold" color="primary">
					{post.title} by{" "}
					<Link to={`/user/${post.author.id}`}>{post.author.displayName}</Link>
				</Typography>
				<Typography variant="body1">{post.content}</Typography>

				<Stack
					direction="row"
					gap={1}
					alignContent="center"
					justifyContent="flex-start"
					sx={{ p: 2 }}
					flexWrap="wrap"
				>
					{post.tags?.map((tag) => <Chip label={tag.label} key={tag.id} />)}
				</Stack>

				{post?.imageUrl && (
					<Box height={400}>
						<CardMedia
							title={"image"}
							src={post.imageUrl}
							loading="lazy"
							alt={post.title}
							component="img"
							sx={{ height: 400, objectFit: "cover" }}
						/>
					</Box>
				)}
				<PostEngagement commentsCount={post.commentsCount} likesCount={post.likesCount} />
			</CardContent>
		</Card>
	);
};

export default PostDetails;
