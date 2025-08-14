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

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Docify-Full-Code
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up MongoDB**
   - Start MongoDB service
   - The app will automatically connect to `mongodb://127.0.0.1:27017/docify`

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:3002`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` or `http://localhost:5174`

3. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🔧 Configuration

### Backend Configuration
- **Port**: 3002 (configurable in `backend/bin/www`)
- **Database**: MongoDB on localhost:27017
- **JWT Secret**: Configured in `backend/routes/index.js`

### Frontend Configuration
- **API Base URL**: `http://localhost:3002` (configurable in `frontend/src/Helper.js`)
- **Development Port**: 5173/5174 (auto-assigned by Vite)

## 📖 API Endpoints

### Authentication
- `POST /login` - User login
- `POST /signUp` - User registration
- `POST /logout` - User logout

### Documents
- `POST /createDoc` - Create new document
- `POST /uploadDoc` - Update document content
- `POST /getDoc` - Fetch document by ID
- `POST /getAllDocs` - Fetch all user documents
- `POST /deleteDoc` - Delete document

### User Management
- `POST /getUser` - Fetch user information

## 🎯 Usage

### 1. User Registration
- Navigate to the signup page
- Fill in your details (username, name, email, phone, password)
- Click "Sign Up" to create your account

### 2. User Login
- Enter your email and password
- Click "Login" to access your dashboard

### 3. Creating Documents
- Click "Create New Document" on the dashboard
- Enter a title for your document
- Click "Create New Document" to open the editor

### 4. Editing Documents
- Use the rich text editor to write your content
- Content auto-saves every second after you stop typing
- Use the toolbar for formatting options

### 5. Managing Documents
- View all your documents on the dashboard
- Click on any document to edit it
- Delete documents using the delete button

## 🔒 Security Features

- **Password Hashing**: Passwords are encrypted using bcrypt
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: API endpoints require valid authentication
- **CORS Protection**: Cross-origin requests are properly handled
- **Input Validation**: Server-side validation for all inputs

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running: `brew services start mongodb-community`
   - Check if port 27017 is available

2. **Port Already in Use**
   - Backend: Change port in `backend/bin/www`
   - Frontend: Vite will automatically find an available port

3. **Jodit Editor Issues**
   - The `config.js` file is required for the editor to work properly
   - Ensure all dependencies are installed correctly

4. **CORS Errors**
   - Backend CORS is configured to allow frontend requests
   - Check that both servers are running on correct ports

### Error Logs
- Check browser console for frontend errors
- Check terminal for backend errors
- MongoDB logs for database issues

## 🚀 Deployment

### Backend Deployment
1. Set environment variables for production
2. Use PM2 or similar process manager
3. Configure MongoDB Atlas for cloud database
4. Set up proper CORS for production domain

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Update API base URL for production
4. Configure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Jodit Pro React** for the rich text editor
- **Tailwind CSS** for the beautiful UI components
- **React Team** for the amazing framework
- **Express.js** for the robust backend framework

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the error logs
3. Create an issue in the repository
4. Contact the development team

---

**Happy Documenting! 📚✍️**