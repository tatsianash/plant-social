import { render } from "@testing-library/react";
import FriendsSection from "./FriendsSection";
import { User } from "../../types/user";

describe("FriendsSection", () => {
	test('renders "No friends yet" message when friends list is empty', () => {
		const { getByText } = render(<FriendsSection friends={[]} />);
		expect(getByText("No friends yet")).toBeInTheDocument();
	});

	test("renders top 5 friends when friends list has more than 5 friends", () => {
		const mockFriends: User[] = [
			{ id: "1", displayName: "Friend 1", friends: [], posts: [] },
			{ id: "2", displayName: "Friend 2", friends: [], posts: [] },
			{ id: "3", displayName: "Friend 3", friends: [], posts: [] },
			{ id: "4", displayName: "Friend 4", friends: [], posts: [] },
			{ id: "5", displayName: "Friend 5", friends: [], posts: [] },
			{ id: "6", displayName: "Friend 6", friends: [], posts: [] },
			{ id: "7", displayName: "Friend 7", friends: [], posts: [] },
		];
		const page = render(<FriendsSection friends={mockFriends} />);
		expect(page.getByText("Top 5 friends:")).toBeInTheDocument();
		expect(page.getByText("Friend 1")).toBeInTheDocument();
		expect(page.getByText("Friend 2")).toBeInTheDocument();
		expect(page.getByText("Friend 3")).toBeInTheDocument();
		expect(page.getByText("Friend 4")).toBeInTheDocument();
		expect(page.getByText("Friend 5")).toBeInTheDocument();
		expect(page.queryByText("Friend 6")).not.toBeInTheDocument();
		expect(page.queryByText("Friend 7")).not.toBeInTheDocument();
	});
});
