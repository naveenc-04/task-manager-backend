# Task Manager App – Backend

This is the backend service for the Task Manager application. It provides RESTful APIs for creating, reading, updating, and deleting tasks. Data is stored in MongoDB.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose

## Features
- CRUD operations for task management
- Priority and deadline support
- RESTful API design
- MongoDB data persistence

## API Endpoints
- GET /api/tasks – Fetch all tasks
- POST /api/tasks – Create a new task
- PUT /api/tasks/:id – Update a task
- DELETE /api/tasks/:id – Delete a task

## Setup Instructions
```bash
git clone https://github.com/naveenc-04/task-manager-backend.git
cd task-manager-backend
npm install
