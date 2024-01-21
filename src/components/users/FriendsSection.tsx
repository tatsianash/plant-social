import { CardContent, Typography } from "@mui/material";
import React from "react";
import { User } from "../../types/user";

interface FriendsSectionProps {
	friends: User["friends"];
}
const FriendsSection = ({ friends }: FriendsSectionProps) => {
	if (friends?.length === 0)
		return (
			<Typography variant="body1" color="secondary.dark">
				No friends yet
			</Typography>
		);

	return (
		<CardContent>
			{friends?.length > 0 && (
				<div>
					<Typography variant="body1" color="secondary.dark">
						Top 5 friends:
					</Typography>
					{friends.slice(0, 5).map((friend) => (
						<Typography variant="body1" key={friend.id}>
							{friend.displayName}
						</Typography>
					))}
				</div>
			)}
		</CardContent>
	);
};

export default FriendsSection;
