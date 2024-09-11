import express from "express";
import { ApolloServer } from "apollo-server-express";
import { connectMongoDB } from "./config/mongodb.js";
import { typeDefs, resolvers } from "./graphql/index.js";
import productRoutes from "./routes/product.js";

const app = express();

app.use(express.json());

const startServer = async () => {
  const mongoConnection = await connectMongoDB();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoConnection }),
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  // REST API 라우터 적용
  app.use("/api", productRoutes(mongoConnection));

  return app;
};

export default startServer;
