import { Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import useSession from "../hooks/useSession";
import MainContainer from "../containers/MainContainer";

const MainLayout = () => {
	const { session } = useSession();

	return (
		<MainContainer>
			<Typography variant="h1" color="primary">
				The Plant Stand
			</Typography>
			<Typography variant="subtitle1" color="secondary">
				{session?.user?.displayName}
			</Typography>
			<div>MainLayout</div>
			<Outlet />
		</MainContainer>
	);
};

export default MainLayout;
