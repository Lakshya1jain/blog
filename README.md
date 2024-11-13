# BLOG.it - Modern Blogging Platform

BLOG.it is a full-stack blogging platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to create, read, update, and delete blog posts with a modern and intuitive interface.

## Features

- 🔐 User authentication (register/login)
- ✍️ Create and edit blog posts with rich text editor
- 🖼️ Image upload support for blog covers
- 🗑️ Delete posts functionality
- 📱 Responsive design
- ⚡ Fast and intuitive user interface
- 🎨 Modern and clean UI with animations
- 🔒 Secure API endpoints
- 📝 Markdown support in editor

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- React Quill for rich text editing
- CSS3 for styling
- Date-fns for date formatting

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads
- Bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running locally
- Git

### Installation

1. Clone the repository
git clone https://github.com/Lakshya1jain/blog.git
cd blogit

2. Install dependencies for both frontend and backend
npm install
cd api
npm install
cd ../client
npm install

3. Set up environment variables
Create a `.env` file in the api directory with the following variables:
MONGODB_URI=mongodb://localhost:27017/blog
JWT_SECRET=asdfe45we45w345wegw345werjktjwertkj
PORT=4000


4. Start the development servers
cd api
npm start
cd ../client
npm start

##Project Structure

blogit/
├── api/ # Backend directory
│ ├── models/ # Database models
│ ├── uploads/ # Uploaded images
│ ├── index.js # Main server file
│ └── package.json # Backend dependencies
├── client/ # Frontend directory
│ ├── public/ # Static files
│ ├── src/ # React source files
│ │ ├── components/# React components
│ │ ├── pages/ # Page components
│ │ └── App.js # Main App component
│ └── package.json # Frontend dependencies
└── package.json # Root package.json


## API Endpoints

- `POST /register` - Register new user
- `POST /login` - User login
- `POST /logout` - User logout
- `GET /profile` - Get user profile
- `POST /post` - Create new post
- `PUT /post` - Update post
- `DELETE /post/:id` - Delete post
- `GET /post` - Get all posts
- `GET /post/:id` - Get single post
