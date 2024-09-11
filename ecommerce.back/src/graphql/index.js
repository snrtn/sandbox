import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

import schemaProduct from "./schemas/schemaProduct.js";
import resolverProduct from "./resolvers/resolverProduct.js";

const typeDefs = mergeTypeDefs([schemaProduct]);

const resolvers = mergeResolvers([resolverProduct]);

export { typeDefs, resolvers };
