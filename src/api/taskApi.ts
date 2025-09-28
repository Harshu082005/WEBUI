import axios from "axios";

const API_URL = "http://localhost:8080/tasks"; // update if needed

export interface TaskExecution {
  startTime: string;
  endTime: string;
  output: string;
}

export interface Task {
  id: string;
  name: string;
  owner: string;
  command: string;
  taskExecutions: TaskExecution[];
}

export const getTasks = () => axios.get<Task[]>(API_URL);
export const createTask = (task: Task) => axios.post<Task>(API_URL, task);
export const deleteTask = (id: string) => axios.delete(`${API_URL}/${id}`);
export const runTask = (id: string) => axios.post<TaskExecution>(`${API_URL}/${id}/run`);

// ✅ ensure it's a module for TypeScript
export {};
