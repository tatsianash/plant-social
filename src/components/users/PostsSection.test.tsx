import { render, screen } from "@testing-library/react";
import { User } from "../../types/user";
import { MemoryRouter } from "react-router-dom";

import PostsSection from "./PostsSection";
import { Post } from "../../types/post";

describe("PostsSection", () => {
	test('renders "No posts yet" message when posts list is empty', () => {
		const mockUser: User = {
			id: "1",
			displayName: "test",
			photoURL: "test",
			friends: [],
			posts: [],
		};
		const page = render(<PostsSection posts={mockUser.posts} />);
		expect(page.getByText("No posts yet")).toBeInTheDocument();
	});

	test("renders posts", () => {
		const posts: Post[] = [
			{
				id: "1",
				title: "title 1",
				content: "content 1",
				author: {
					id: "1",
					displayName: "test",
				},
				createdAt: "2020-01-01",
			},
		];

		render(
			<MemoryRouter>
				<PostsSection posts={posts} />
			</MemoryRouter>,
		);
		expect(screen.getByText("title 1")).toBeInTheDocument();
	});
});
