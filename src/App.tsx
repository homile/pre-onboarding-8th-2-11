import { Route, Routes } from "react-router-dom";
import IssueCreate from "./pages/IssueCreate/IssueCreate";
import IssueMain from "./pages/Main/IssueMain";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IssueMain />}></Route>
      <Route path="/create" element={<IssueCreate />}></Route>
    </Routes>
  );
};

export default App;
