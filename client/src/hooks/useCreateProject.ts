import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  CREATE_PROJECT,
  CreateProjectVariables,
  CreateProjectResponse,
} from "../queries/projectQueries";
import graphqlClient from "../graphqlClient";

export function useCreateProject() {
  const queryClient = useQueryClient();
  return useMutation<CreateProjectResponse, Error, CreateProjectVariables>({
    mutationFn: async (variables) => {
      return graphqlClient.request<CreateProjectResponse>(
        CREATE_PROJECT,
        variables
      );
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["projects"], (oldData: any) => {
        return {
          ...oldData,
          projects: [...(oldData?.projects || []), data.addProject],
        };
      });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error) => {
      console.error("Error creating project:", error.message);
    },
  });
}
