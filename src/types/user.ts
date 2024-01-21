import { Post } from "./post";

export type User = {
	id: string;
	displayName: string;
	photoURL?: string;
	friends: User[];
	posts: Post[];
};
