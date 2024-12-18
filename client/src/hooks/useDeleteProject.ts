import { DELETE_PROJECT, DeleteProjectResponse } from './../queries/projectQueries';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import graphqlClient from "../graphqlClient";

export function useDeleteProject() {
  const queryClient = useQueryClient();

  return useMutation<DeleteProjectResponse, Error, string>({
    mutationFn: async (id) => {
      const variables = { id };
      return graphqlClient.request<DeleteProjectResponse>(
        DELETE_PROJECT,
        variables
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}
