const express = require("express");
require("dotenv").config();
const cors = require('cors')
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const colors = require("colors");
const connectDB = require("./config/db");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors())
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
