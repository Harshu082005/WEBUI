import React from "react";
import { Form, Input, Button, message } from "antd";
import { createTask } from "../api/taskApi";
import { useNavigate } from "react-router-dom";

const TaskForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      await createTask({ ...values, taskExecutions: [] });
      message.success("Task created successfully");
      navigate("/");
    } catch {
      message.error("Failed to create task");
    }
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 600 }}>
      <Form.Item label="ID" name="id" rules={[{ required: true, message: "Please enter task ID" }]}>
        <Input placeholder="Enter task ID" />
      </Form.Item>
      <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter task name" }]}>
        <Input placeholder="Enter task name" />
      </Form.Item>
      <Form.Item label="Owner" name="owner" rules={[{ required: true, message: "Please enter task owner" }]}>
        <Input placeholder="Enter task owner" />
      </Form.Item>
      <Form.Item label="Command" name="command" rules={[{ required: true, message: "Please enter command" }]}>
        <Input placeholder="Enter shell command" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" aria-label="Create Task">
          Create Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
