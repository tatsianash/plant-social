import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import FeedPage from "./pages/FeedPage";
import UserPage from "./pages/UserPage";
import DetailsLayout from "./layouts/DetailsLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<FeedPage />} />
				</Route>

				<Route element={<DetailsLayout />}>
					<Route path="/user/:id" element={<UserPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
