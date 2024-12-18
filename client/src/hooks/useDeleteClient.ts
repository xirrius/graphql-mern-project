import { useMutation, useQueryClient } from "@tanstack/react-query";
import graphqlClient from "../graphqlClient";
import { DELETE_CLIENT, DeleteClientResponse } from "../queries/clientQueries";

export function useDeleteClient() {
  const queryClient = useQueryClient();

  return useMutation<DeleteClientResponse, Error, string>({
    mutationFn: async (id) => {
      const variables = { id };
      return graphqlClient.request<DeleteClientResponse>(
        DELETE_CLIENT,
        variables
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}
