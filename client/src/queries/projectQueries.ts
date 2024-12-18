import { Client } from "./clientQueries";

export const GET_PROJECTS = `
  query GetProjects {
    projects {
      id
      name
      status
    }
  }
`;

export const GET_PROJECT = `
query GetProject($id: ID!) {
  project (id: $id) {
    id
    name
    status
    description
    client {
      id
      name
      email
      phone
    }
  }
}`;

export const CREATE_PROJECT = `
mutation CreateProject($name: String!, $description: String!, $status: ProjectStatus!, $clientId: ID!) {
  addProject (name: $name, description: $description, status: $status, clientId: $clientId) {
    id
    name
    description
    status
    client {
      id
      name
      email
      phone
    }
  }
}`;

export const UPDATE_PROJECT = `
mutation UpdateProject($id: ID!, $name: String!, $description: String!, $status: ProjectStatusUpdate!) {
  updateProject (id: $id, name: $name, description: $description, status: $status) {
    id
    name
    description
    status
    client {
      id
      name
      email
      phone
    }
  }
}`;

export const DELETE_PROJECT = `
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export interface Project {
  id?: string;
  name?: string;
  status?: string;
  description?: string;
  client?: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
}

export interface CreateProjectVariables {
  name: string;
  description: string;
  status: string;
  clientId: string;
}

export interface UpdateProjectVariables {
  id: string;
  name: string;
  description: string;
  status: string;
}

export interface GetProjectsResponse {
  projects: Project[];
}

export interface GetProjectResponse {
  project: Project;
}

export interface CreateProjectResponse {
  addProject: {
    id: string;
    name: string;
    description: string;
    status: string;
    client: Client;
  };
}

export interface UpdateProjectResponse {
  updateProject: {
    id: string;
    name: string;
    description: string;
    status: string;
    client: Client;
  };
}

export interface DeleteProjectResponse {
  deleteProject: Project;
}
