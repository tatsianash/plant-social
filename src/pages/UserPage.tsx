import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchUserById, userIdQueryKey } from "../api/api";
import UserDetails from "../components/users/UserDetails";

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
		return <UserDetails user={user} />;
	}
};

export default UserPage;
