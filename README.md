Task Manager – Backend

This is the backend service for the Task Manager application.
It provides REST APIs to create, update, read, and delete tasks.
Data is stored in MongoDB.

Tech Stack:
  1. Node.js
  2. Express
  3. MongoDB
  4. Mongoose

Endpoints:
  1. GET /tasks
  2. POST /tasks
  3. PUT /tasks/:id
  4. DELETE /tasks/:id

Setup:
 git clone https://github.com/naveenc-04/task-manager-backend.git
 cd task-manager-backend
 npm install

Environment Variables:
 Create a .env file:
 PORT=5000
 MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority

Start Server:
  npm start

Frontend Repository:
  https://github.com/naveenc-04/task-manager-frontend
