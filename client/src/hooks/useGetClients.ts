import { useQuery } from "@tanstack/react-query";
import graphqlClient from "../graphqlClient";
import { GET_CLIENTS, GetClientsResponse } from "../queries/clientQueries";

export function useGetClients() {
  return useQuery<GetClientsResponse, Error>({
    queryKey: ["clients"],
    queryFn: async () => {
      return graphqlClient.request<GetClientsResponse>(GET_CLIENTS);
    },
  });
}
