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

 **Setup Steps**

 1. **Clone the repository:**

    ```bash
    git clone <repository-url && cd netpanel
    ```

 2. **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

 3. **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install -g http-server
    ```

 4. **Run the project:**

    * **Start the backend:**

      ```bash
      cd backend && node server.js
      ```

    * **Serve the frontend:**

      ```bash
      cd ../frontend && http-server
      ```

 5. **Access the application:**

    Open your browser and navigate to: `http://localhost:8080/pages/index.html`