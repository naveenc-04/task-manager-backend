Task Manager – Backend

This is the backend service for the Task Manager application.
It provides REST APIs to create, update, read, and delete tasks.
Data is stored in MongoDB.

Tech Stack
Node.js
Express
MongoDB
Mongoose

Endpoints
GET /tasks
POST /tasks
PUT /tasks/:id
DELETE /tasks/:id

Setup
git clone https://github.com/naveenc-04/task-manager-backend.git
cd task-manager-backend
npm install

Environment Variables
Create a .env file:
PORT=5000
MONGO_URI=<your-mongodb-connection-url>

Start Server
npm start

Frontend Repository
https://github.com/naveenc-04/task-manager-frontend
