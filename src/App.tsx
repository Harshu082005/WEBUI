import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import TaskList from "./pages/TaskList";
import TaskForm from "./pages/TaskForm";

const { Header, Content } = Layout;

const App: React.FC = () => (
  <Router>
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "white", fontSize: 20 }}>Task Manager</Header>
      <Content style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create" element={<TaskForm />} />
        </Routes>
      </Content>
    </Layout>
  </Router>
);

export default App;
