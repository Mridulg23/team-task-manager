# Team Task Manager

A full-stack task management web application where users can create projects, assign tasks, track progress, and manage overdue work with authentication and role-based access.

---

## Features

- User Authentication (Register/Login)
- JWT Authorization
- Project Management
- Task Creation & Assignment
- Task Status Update
- Dashboard Statistics
- Overdue Task Tracking
- Responsive UI
- REST APIs
- MySQL Database

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- JWT

### Database
- MySQL

### Deployment
- Railway

---

## API Routes

### Auth Routes

POST `/api/auth/register` — Register User  
POST `/api/auth/login` — Login User  

---

### Project Routes

GET `/api/projects` — Get Projects  
POST `/api/projects` — Create Project  

---

### Task Routes

GET `/api/tasks` — Get Tasks  
POST `/api/tasks` — Create Task  
PUT `/api/tasks/:id` — Update Task Status  
