import React, { useEffect, useState } from "react";
import { Table, Button, Space, Input, Modal, message } from "antd";
import { Task, getTasks, deleteTask, runTask } from "../api/taskApi";
import { Link } from "react-router-dom";

const { Search } = Input;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [outputModal, setOutputModal] = useState<{ visible: boolean; output: string }>({
    visible: false,
    output: "",
  });

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      message.error("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      message.success("Task deleted");
      fetchTasks();
    } catch {
      message.error("Failed to delete task");
    }
  };

  const handleRun = async (id: string) => {
    try {
      const res = await runTask(id);
      setOutputModal({ visible: true, output: res.data.output });
      fetchTasks();
    } catch {
      message.error("Failed to run task");
    }
  };

  const filteredTasks = tasks.filter(
    (t) =>
      t.name.toLowerCase().includes(searchText.toLowerCase()) ||
      t.owner.toLowerCase().includes(searchText.toLowerCase()) ||
      t.command.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Owner", dataIndex: "owner", key: "owner" },
    { title: "Command", dataIndex: "command", key: "command" },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Task) => (
        <Space>
          <Button type="primary" onClick={() => handleRun(record.id)} aria-label={`Run task ${record.name}`}>
            Run
          </Button>
          <Button danger onClick={() => handleDelete(record.id)} aria-label={`Delete task ${record.name}`}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Link to="/create">
          <Button type="primary" aria-label="Create new task">
            Create Task
          </Button>
        </Link>
        <Search
          placeholder="Search tasks by name, owner, or command"
          onChange={(e) => setSearchText(e.target.value)}
          allowClear
          style={{ width: 300 }}
          aria-label="Search Tasks"
        />
      </Space>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={filteredTasks}
        loading={loading}
        aria-label="Task List"
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title="Task Output"
        visible={outputModal.visible}
        onOk={() => setOutputModal({ visible: false, output: "" })}
        onCancel={() => setOutputModal({ visible: false, output: "" })}
        width={600}
      >
        <pre style={{ maxHeight: 400, overflow: "auto" }}>{outputModal.output}</pre>
      </Modal>
    </div>
  );
};

export default TaskList;
