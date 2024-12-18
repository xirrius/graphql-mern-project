import { GET_PROJECTS, GetProjectsResponse } from '../queries/projectQueries';
import { useQuery } from "@tanstack/react-query";
import graphqlClient from "../graphqlClient";

export function useGetProjects() {
  return useQuery<GetProjectsResponse, Error>({
    queryKey: ["projects"],
    queryFn: async () => {
      return graphqlClient.request<GetProjectsResponse>(GET_PROJECTS);
    },
  });
}
