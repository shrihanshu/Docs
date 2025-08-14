# Docify - Document Management System

A full-stack document management application built with React, Node.js, and MongoDB. Create, edit, and manage your documents with a rich text editor in a modern, responsive interface.

## 🚀 Features

- **User Authentication**: Secure login and signup system
- **Rich Text Editor**: Advanced document editing with Jodit Pro React
- **Document Management**: Create, edit, delete, and organize documents
- **Real-time Saving**: Auto-save functionality with debounced updates
- **Responsive Design**: Modern UI that works on all devices
- **Secure API**: JWT-based authentication with protected routes

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Jodit Pro React** - Rich text editor
- **React Icons** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Docify-Full-Code/
├── backend/                 # Backend server
│   ├── app.js             # Express app configuration
│   ├── bin/www            # Server entry point
│   ├── models/            # Database models
│   │   ├── docModel.js    # Document schema
│   │   └── useModel.js    # User schema
│   ├── routes/            # API routes
│   │   ├── index.js       # Main API routes
│   │   └── users.js       # User management routes
│   ├── public/            # Static files
│   └── views/             # EJS templates
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Navbar.jsx # Navigation component
│   │   │   └── Docs.jsx   # Document list component
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx           # Dashboard
│   │   │   ├── Login.jsx          # Login page
│   │   │   ├── SignUp.jsx         # Registration page
│   │   │   └── createDocs.jsx     # Document editor
│   │   ├── Helper.js      # API configuration
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # App entry point
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
└── README.md              # This file
```

