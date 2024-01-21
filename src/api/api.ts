import axios from "axios";
import { Session } from "../types/session";

export const sessionQueryKey = ["session"];

export const fetchSession = (): Promise<Session> => {
	return axios.get("http://localhost:3000/session").then((res) => res.data);
};
