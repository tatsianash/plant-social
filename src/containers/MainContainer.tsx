import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface MainContainerProps {
	children: React.ReactNode;
}
const MainContainer = ({ children }: MainContainerProps) => {
	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				width: "100vw",
			}}
		>
			<AppBar position="static" sx={{ width: "100%", mb: 4 }}>
				<Toolbar>
					<Typography
						variant="h6"
						component={Link}
						to="/"
						fontWeight="bold"
						style={{ textDecoration: "none", color: "white" }}
					>
						The Plant Stand
					</Typography>
				</Toolbar>
			</AppBar>
			{children}
		</Box>
	);
};

export default MainContainer;
