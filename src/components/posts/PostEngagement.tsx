import { Box, Typography } from "@mui/material";
import React from "react";

interface PostEngagementProps {
	commentsCount: number;
	likesCount: number;
}
const PostEngagement = ({ commentsCount, likesCount }: PostEngagementProps) => {
	return (
		<Box mt={2} display="flex" gap={2} flexDirection="row" justifyContent="space-between">
			<Typography variant="subtitle1" color="primary">
				Comments: {commentsCount}
			</Typography>
			<Typography variant="subtitle1" color="secondary">
				Likes: {likesCount}
			</Typography>
		</Box>
	);
};

export default PostEngagement;
