# TaskFlow – Task Manager Backend

This repository contains the **backend service** for the TaskFlow Task Manager application.  
It is built using **Node.js**, **Express**, and **MongoDB**, and provides RESTful APIs for managing tasks.

The backend is deployed on **Render** and is consumed by a separate React frontend.

---

## 🚀 Features

- Create, read, update, and delete tasks (CRUD)
- Task priority support (Low, Medium, High)
- Task status support (Default Pending)
- RESTful API design
- MongoDB data persistence using Mongoose

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📌 API Endpoints

- `GET /api/tasks` – Fetch all tasks
- `POST /api/tasks` – Create a new task
- `PUT /api/tasks/:id` – Update a task
- `DELETE /api/tasks/:id` – Delete a task

---

## ⚙️ Setup Instructions (Local)

Clone the repository:

```bash
git clone https://github.com/naveenc-04/task-manager-backend.git
cd task-manager-backend

---

Install dependencies:
npm install

---

Create a .env file in the root directory:
PORT=5000
MONGO_URI=your_mongodb_connection_string

---

Start the server:
npm start


The server will run on:
http://localhost:5000


🌐 Deployment
The backend is deployed on Render and serves as the production API for the frontend application.

🔗 Frontend Repository:

👉https://github.com/naveenc-04/task-manager-frontend