import { render, screen } from "@testing-library/react";
import { User } from "../../types/user";

import UserDetails from "./UserDetails";

describe("UserDetails", () => {
	test("renders user details", () => {
		const user: User = {
			id: "1",
			displayName: "test user",
			photoURL: "test",
			friends: [],
			posts: [],
		};
		const page = render(<UserDetails user={user} />);
		expect(page.getByText("test user")).toBeInTheDocument();
	});
});
