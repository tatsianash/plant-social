import axios from "axios";
import { Session } from "../types/session";
import { User } from "../types/user";

export const sessionQueryKey = ["session"];

export const fetchSession = (): Promise<Session> => {
	return axios.get("http://localhost:3000/session").then((res) => res.data);
};

export const userIdQueryKey = ["user", "id"];

export const fetchUserById = (id: string | undefined): Promise<User | undefined> => {
	if (!id) return Promise.resolve(undefined);
	return axios.get(`http://localhost:3000/users?id=${id}`).then((res) => res?.data[0]);
};
