import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { User } from "../../types/user";
import FriendsSection from "./FriendsSection";
import PostsSection from "./PostsSection";

interface UserDetailsProps {
	user: User;
}

const UserDetails = ({ user }: UserDetailsProps) => {
	return (
		<Card key={user.id}>
			<CardContent>
				<Typography variant="h5" fontWeight="bold" color="primary">
					{user.displayName}
				</Typography>
				<Typography variant="subtitle1">Friends count: {user.friends.length}</Typography>
			</CardContent>

			<FriendsSection friends={user.friends} />
			<PostsSection posts={user.posts} />
		</Card>
	);
};

export default UserDetails;
