import { useMutation, useQueryClient } from "@tanstack/react-query";
import graphqlClient from "../graphqlClient";
import {
  CREATE_CLIENT,
  CreateClientVariables,
  CreateClientResponse,
} from "../queries/clientQueries";

export function useCreateClient() {
  const queryClient = useQueryClient();

  return useMutation<CreateClientResponse, Error, CreateClientVariables>({
    mutationFn: async (variables) => {
      return graphqlClient.request<CreateClientResponse>(
        CREATE_CLIENT,
        variables
      );
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["clients"], (oldData: any) => {
        return {
          ...oldData,
          clients: [...(oldData?.clients || []), data.createClient],
        };
      });
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
    onError: (error) => {
      console.error("Failed to create client:", error.message);
    },
  });
}
