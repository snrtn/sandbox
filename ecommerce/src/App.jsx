import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "@view/HomeView";
import Layout from "@view/LayoutView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
