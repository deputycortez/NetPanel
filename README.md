# NetPanel Access Panel

## Description
NetPanel Access Panel is a lightweight intranet access panel designed to help users manage their home networks with ease. It features secure JWT authentication, role-based access control, and a modern dashboard that provides an overview of network activity, bandwidth usage, and more.

## Features
- **Secure Authentication**: JWT-based secure login for users.
- **Role-Based Dashboard**: Custom views and access control based on user roles.
- **Network Devices Overview**: Displays all connected devices, including their names, IP addresses, and statuses.
- **Bandwidth Usage Monitor**: Real-time bandwidth monitoring for each connected device.
- **User Management**: Admin features for adding, editing, and removing users, as well as assigning roles.
- **Alerts and Notifications**: Get notified about unusual network activities.
- **Interactive Chat Assistant**: A floating chat widget to assist users.
# NetPanel Access Panel

## Description
NetPanel Access Panel is a lightweight intranet access panel designed to help users manage their home networks with ease. It features secure JWT authentication, role-based access control, and a modern dashboard that provides an overview of network activity, bandwidth usage, and more.

## Features
- **Secure Authentication**: JWT-based secure login for users.
- **Role-Based Dashboard**: Custom views and access control based on user roles.
- **Network Devices Overview**: Displays all connected devices, including their names, IP addresses, and statuses.
- **Bandwidth Usage Monitor**: Real-time bandwidth monitoring for each connected device.
- **User Management**: Admin features for adding, editing, and removing users, as well as assigning roles.
- **Alerts and Notifications**: Get notified about unusual network activities.
- **Interactive Chat Assistant**: A floating chat widget to assist users.
## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js (Express.js)
- **Authentication**: JWT (JSON Web Tokens)

## Folder Structure
netpanel/
├── backend/                # Backend files
│   ├── controllers/        # Core logic for routes
│   │   └── authController.js
│   ├── middleware/         # Middleware (e.g., authentication)
│   │   └── authMiddleware.js
│   ├── models/             # Mock data for users
│   │   └── userModel.js
│   ├── routes/             # Backend routes
│   │   ├── authRoutes.js
│   │   └── dashboardRoutes.js
│   ├── server.js           # Entry point for the backend
│   ├── .env                # Environment variables
│   ├── package.json        # Backend dependencies
│   └── LICENSE             # Project license
│
├── frontend/               # Frontend files
│   ├── assets/             # Static files
│   │   ├── css/
│   │   │   └── style.css   # Global styles
│   │   └── js/
│   │       ├── auth.js     # Login logic
│   │       ├── dashboard.js# Dashboard logic
│   │       └── chat.js     # Chat assistant logic
│   ├── pages/              # HTML pages
│   │   ├── index.html      # Login page
│   │   └── dashboard.html  # Dashboard page
│   └── LICENSE             # Project license
├── LICENSE                 # Project license
├── README.md               # Project description and usage guide
├── .gitignore              # Files and folders to ignore
└── package.json            # Backend and global dependencies
## Setup Steps