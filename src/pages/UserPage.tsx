import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchUserById, userIdQueryKey } from "../api/api";
import { Card, CardContent, Typography } from "@mui/material";

const UserPage = () => {
	const { id } = useParams();
	const {
		data: user,
		isLoading,
		isSuccess,
		isError,
	} = useQuery({
		queryKey: userIdQueryKey,
		queryFn: () => fetchUserById(id),
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!user || isError) {
		return <div>User not found</div>;
	}

	if (isSuccess) {
		return (
			<Card>
				<CardContent>
					<Typography variant="h5" fontWeight="bold" color="primary">
						{user.displayName}
					</Typography>
					<Typography variant="subtitle1" color="secondary">
						Friends count: {user.friends.length}
					</Typography>
				</CardContent>
			</Card>
		);
	}
};

export default UserPage;
