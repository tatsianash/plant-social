import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

import { MemoryRouter, useParams } from "react-router-dom";
import PostPage from "./PostPage";

const queryClient = new QueryClient();
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useParams: jest.fn(),
}));

jest.mock("@tanstack/react-query", () => ({
	...jest.requireActual("@tanstack/react-query"),
	useQuery: jest.fn(),
}));

describe("PostPage", () => {
	test("renders loading state", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter initialEntries={["/posts/123"]}>
					<PostPage />
				</MemoryRouter>
			</QueryClientProvider>,
		);

		expect(screen.getByText("Loading...")).toBeInTheDocument();
		expect(screen.queryByText("content 1")).not.toBeInTheDocument();
	});

	test("renders post details when data is fetched", async () => {
		useParams.mockReturnValue({ id: "123" });

		// Mock useQuery
		const mockPostData = {
			id: "123",
			title: "Test Post",
			content: "This is a test post",
			author: {
				id: "111",
				displayName: "test user",
			},
		};
		const mockLoadingState = false;
		useQuery.mockReturnValue({ data: mockPostData, isLoading: mockLoadingState });

		render(
			<MemoryRouter initialEntries={["/posts/123"]}>
				<QueryClientProvider client={queryClient}>
					<PostPage />
				</QueryClientProvider>
			</MemoryRouter>,
		);

		expect(screen.getByText("This is a test post")).toBeInTheDocument();
		expect(screen.queryByText("Post not found")).toBeNull();
		expect(screen.queryByText("Loading...")).toBeNull();
	});
});
