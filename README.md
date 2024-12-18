# GraphQL with MERN

This is a MERN project that uses GraphQL and ReactQuery.

## Project Setup Guide

This guide will walk you through the steps to set up and run the project on your local machine.

### Prerequisites
Make sure you have the following installed on your system:
- Node.js (LTS version recommended)
- npm (comes with Node.js)
- MongoDB (if using a local database)

### Setup Instructions

#### Step 1: Clone the Repository
1. Clone the project repository to your local machine:
   ```bash
   git clone https://github.com/xirrius/graphql-mern-project.git
   ```
2. Navigate to the root directory of the project:
   ```bash
   cd <project-folder>
   ```

#### Step 2: Install Dependencies
Run the following command in the root directory to install server dependencies:
```bash
npm install
```

#### Step 3: Configure Environment Variables
1. Create a `.env` file in the root directory.
2. Add the following environment variables with your own values:
   ```env
   NODE_ENV=<your-node-environment>
   MONGO_URI=<your-mongodb-connection-string>
   PORT=<your-server-port>
   ```

#### Extra Step: GraphiQL
1. To open GraphiQL setup for this project, just navigate to `http://localhost:<PORT>/graphql` (Replace `<PORT>` with the value you specified in the `.env` file).

#### Step 4: Install Client Dependencies
1. Navigate to the client folder:
   ```bash
   cd client
   ```
2. Run the following command to install client dependencies:
   ```bash
   npm install
   ```

#### Step 5: Run the Project
1. Navigate back to the root directory:
   ```bash
   cd ..
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

The project should now be running. You can access it in your browser at `http://localhost:5173`.

#### Notes
- Ensure that MongoDB is running if you are using a local database.
- If you encounter any issues, verify that all dependencies are installed correctly and that the `.env` file contains valid values.

Thank you for setting up the project!

