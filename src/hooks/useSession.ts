import { useQuery } from "@tanstack/react-query";
import { sessionQueryKey, fetchSession } from "../api/api";

const useSession = () => {
	const { data, isLoading } = useQuery({
		queryKey: sessionQueryKey,
		queryFn: fetchSession,
	});

	return {
		session: data,
		isLoading,
	};
};

export default useSession;
