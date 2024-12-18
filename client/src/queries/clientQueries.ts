export const GET_CLIENTS = `
  query GetClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export const DELETE_CLIENT = `
  mutation DeleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export const CREATE_CLIENT = `
  mutation CreateClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface GetClientsResponse {
  clients: Client[];
}

export interface DeleteClientResponse {
  deleteClient: Client;
}

export interface CreateClientVariables {
  name: string;
  email: string;
  phone: string;
}

export interface CreateClientResponse {
  createClient: Client;
}
