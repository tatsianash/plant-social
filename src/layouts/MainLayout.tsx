import {
	Button,
	Container,
	Grid,
	List,
	ListItemButton,
	ListItemText,
	Typography,
} from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import useSession from "../hooks/useSession";
import MainContainer from "../containers/MainContainer";
import theme from "../theme/theme";

const MainLayout = () => {
	const { session } = useSession();

	return (
		<MainContainer>
			<Container maxWidth="lg">
				<Grid container width={"100%"}>
					<Grid item xs={12} md={2} spacing={2} gap={2}>
						<Typography variant="h4" color="primary">
							{session?.user?.displayName}
						</Typography>

						<Link to={`/user/${session?.user?.id}`}>
							<Button variant="contained"> View My Profile</Button>
						</Link>
						<nav>
							<List>
								<ListItemButton component={Link} to="/">
									<ListItemText primary="My Feed" />
								</ListItemButton>
								<ListItemButton component={Link} to="/groups">
									<ListItemText primary="My Groups" />
								</ListItemButton>
							</List>
						</nav>
					</Grid>
					<Grid item xs={12} md={7}>
						<Outlet />
					</Grid>
					<Grid item xs={12} md={3} pl={4}>
						<Typography variant="h5" color="secondary">
							Friends suggestions
						</Typography>
						<Link
							to="/user/3"
							style={{ textDecoration: "none", color: theme.palette.primary.main }}
						>
							Rising Star
						</Link>
					</Grid>
				</Grid>
			</Container>
		</MainContainer>
	);
};

export default MainLayout;
