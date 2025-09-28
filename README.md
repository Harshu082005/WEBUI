This project implements a Web UI frontend for the Task Manager application. It allows users to:

Create new tasks

View all tasks

Search/filter tasks

Delete tasks

Run tasks and view their output

Technologies Used:

React 19

TypeScript

Ant Design

1. Installation & Setup

Clone the repository:

git clone <your-repo-link>
cd task-3-web-ui


Install dependencies:

npm install


Start the development server:

npm start


Open http://localhost:3000
 in your browser.

Make sure your backend API is running at http://localhost:8080/tasks or update API_URL in taskApi.ts.

2. Features

Add Task: Fill out the form with ID, Name, Owner, and Command → submit → task created.

View Tasks: All tasks are listed in a table with pagination.

Search Tasks: Filter tasks by Name, Owner, or Command.

Delete Task: Remove a task from the table.

Run Task: Execute a task and view its output in a modal.

3. Testing

Run tests (if implemented) with:

npm test

4. Deployment

Build the app for production:

npm run build

5.Screenshots

[![Screenshot](https://github.com/user-attachments/assets/f8416994-d081-4224-bf55-1a8d28293acb)](https://github.com/user-attachments/assets/f8416994-d081-4224-bf55-1a8d28293acb)

[![Screenshot](https://github.com/user-attachments/assets/f8416994-d081-4224-bf55-1a8d28293acb)]

6.How to Use the Application

View Task List: Navigate to / → see all tasks in a table.

Search Tasks: Use search bar to filter by Name, Owner, or Command.

Create Task: Navigate to /create → fill form → submit → task added.

Delete Task: Click Delete in table → task removed.

Run Task: Click Run in table → output modal appears showing result.





