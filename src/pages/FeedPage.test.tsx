import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import FeedPage from "./FeedPage";
import { postsQueryKey } from "../api/api";
import { MemoryRouter } from "react-router-dom";

const queryClient = new QueryClient();

describe("FeedPage", () => {
	test("renders loading state", () => {
		render(
			<QueryClientProvider client={queryClient}>
				<FeedPage />
			</QueryClientProvider>,
		);
		expect(screen.getByText("Loading...")).toBeInTheDocument();
	});

	test("render posts", () => {
		queryClient.setQueryData(postsQueryKey, [
			{
				id: "1",
				title: "title 1",
				content: "content 1",
				author: {
					id: "1",
					displayName: "test",
				},
				createdAt: "2024-01-01T00:00:00.000Z",
			},
		]);
		render(
			<MemoryRouter>
				<QueryClientProvider client={queryClient}>
					<FeedPage />
				</QueryClientProvider>
			</MemoryRouter>,
		);
		expect(
			screen.queryByText("Posts not found. Please try again"),
		).not.toBeInTheDocument();
	});
});
