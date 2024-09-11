import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Redux 관련 임포트
import { Provider } from "react-redux";
import store from "./redux/store.js";

// // Apollo Client 관련 임포트
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql", // 로컬 GraphQL 서버 예시
//   cache: new InMemoryCache(),
// });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <ApolloProvider client={client}> */}
      <App />
      {/* </ApolloProvider> */}
    </Provider>
  </StrictMode>
);
