import axios from "axios";
import { Session } from "../types/session";
import { User } from "../types/user";
import { Post } from "../types/post";

export const sessionQueryKey = ["session"];

export const fetchSession = (): Promise<Session> => {
	return axios.get("http://localhost:3000/session").then((res) => res.data);
};

export const userIdQueryKey = ["user", "id"];

export const fetchUserById = (id: string | undefined): Promise<User | undefined> => {
	if (!id) return Promise.resolve(undefined);
	return axios.get(`http://localhost:3000/users?id=${id}`).then((res) => res?.data[0]);
};

export const postsQueryKey = ["posts"];

export const fetchPosts = (): Promise<Post[]> => {
	return axios.get("http://localhost:3000/posts").then((res) => res.data);
};

export const postIdQueryKey = ["post", "id"];
export const fetchPostById = (id: string | undefined): Promise<Post | undefined> => {
	if (!id) return Promise.resolve(undefined);
	return axios.get(`http://localhost:3000/posts?id=${id}`).then((res) => res?.data[0]);
};
