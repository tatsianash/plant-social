import React from "react";
import { Link, Outlet } from "react-router-dom";
import MainContainer from "../containers/MainContainer";
import { Box, Button } from "@mui/material";

const DetailsLayout = () => {
	return (
		<MainContainer>
			<Box
				display="flex"
				flexDirection="column"
				gap={2}
				maxWidth="lg"
				mx="auto"
				width="100%"
			>
				<Button variant="outlined" component={Link} to="..">
					Go back
				</Button>
				<Outlet />
			</Box>
		</MainContainer>
	);
};

export default DetailsLayout;
