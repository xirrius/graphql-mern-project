import { GET_PROJECT, GetProjectResponse } from "../queries/projectQueries";
import { useQuery } from "@tanstack/react-query";
import graphqlClient from "../graphqlClient";

export function useGetProject(id: string) {
  return useQuery<GetProjectResponse, Error>({
    queryKey: ["project", id],
    queryFn: async () => {
      const variables = { id };
      return graphqlClient.request<GetProjectResponse>(GET_PROJECT, variables);
    },
  });
}
