import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  UPDATE_PROJECT,
  UpdateProjectResponse,
  UpdateProjectVariables,
} from "../queries/projectQueries";
import graphqlClient from "../graphqlClient";

export function useUpdateProject() {
  const queryClient = useQueryClient();
  return useMutation<UpdateProjectResponse, Error, UpdateProjectVariables>({
    mutationFn: async (variables) => {
      return graphqlClient.request<UpdateProjectResponse>(
        UPDATE_PROJECT,
        variables
      );
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["projects"], (oldData: any) => {
        if (!oldData) return;
        return {
          ...oldData,
          projects: oldData.projects.map((project: any) =>
            project.id === data.updateProject.id ? data.updateProject : project
          ),
        };
      });

      // Optionally, invalidate other related queries to ensure consistency
      queryClient.invalidateQueries({
        queryKey: ["project", data.updateProject.id],
      });
    },
    onError: (error) => {
      console.error("Error creating project:", error.message);
    },
  });
}
