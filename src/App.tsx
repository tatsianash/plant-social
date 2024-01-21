import { Typography } from "@mui/material";
import useSession from "./hooks/useSession";

function App() {
	const { session } = useSession();

	return (
		<>
			<Typography variant="h1" color="primary">
				The Plant Stand
			</Typography>
			<Typography variant="subtitle1" color="secondary">
				{session?.user?.displayName}
			</Typography>
		</>
	);
}

export default App;
