# 📝 Todo App (Node.js + MongoDB)

A simple RESTful API for managing tasks (To-Do items) built with **Node.js**, **Express**, and **MongoDB**.

---

## 📦 Features

- Create a new task
- Get all tasks
- Get a specific task by ID
- Update a task
- Delete a task

---

## 🚀 Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv
- CORS

---

## 📁 Project Structure

todo-app/ ├── models/ │ └── Task.js ├── routes/ │ └── tasks.js ├── .env ├── server.js ├── package.json


---

## 🛠 Installation and Setup

1. Create the file structure:

mkdir todo-app && cd todo-app && mkdir models routes && type nul > models\Task.js && type nul > routes\tasks.js && type nul > .env && type nul > server.js && type nul > package.json
Install the required dependencies:


npm install express mongoose cors dotenv
npm install --save-dev nodemon
Configure environment variables:
Create a .env file and add:

env

PORT=5000
MONGO_URI=mongodb://localhost:27017/todoapp
Start the server:


npm run dev
✅ Server will run on http://localhost:5000/.

📬 API Endpoints

Method	Endpoint	Description	Body (if needed)
POST	/api/tasks	Create a new task	{ "title": "Task Title" }
GET	/api/tasks	Get all tasks	-
GET	/api/tasks/:id	Get a task by ID	-
PUT	/api/tasks/:id	Update a task (title or completed status)	{ "title": "New Title", "completed": true }
DELETE	/api/tasks/:id	Delete a task	-