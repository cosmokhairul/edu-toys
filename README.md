# EduToys

## Description
This is a MERN stack project that serves as web application. The application allows users to [briefly describe main features, e.g., "create, read, update, and delete tasks, manage user authentication etc."].

## Features
- **User Authentication**: Secure login and registration with JWT tokens.
- **Task Management**: Create, read, update, and delete tasks.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Prerequisites
Ensure having the following installed on your local machine:
- Node.js
- MongoDB
- Git

## Installation

### Backend Setup
1. **Clone the repository**
    ```sh
    git clone https://github.com/yourusername/mern-project.git
    cd mern-project
    ```

2. **Navigate to the backend directory**
    ```sh
    cd backend
    ```

3. **Install backend dependencies**
    ```sh
    npm install
    ```

4. **Set up environment variables**
    - Create a `.env` file in the `backend` directory.
    - Add the following environment variables to the `.env` file:
      ```env
      MONGO_URI=mongodb://localhost:27017/yourdbname
      JWT_SECRET=your_jwt_secret
      PORT=5000
      ```

5. **Start the backend server**
    ```sh
    npm start
    ```
    The backend server should now be running on [http://localhost:5000](http://localhost:5000).

### Frontend Setup
1. **Navigate to the frontend directory**
    ```sh
    cd ../frontend
    ```

2. **Install frontend dependencies**
    ```sh
    npm install
    ```

3. **Set up environment variables**
    - Create a `.env` file in the `frontend` directory.
    - Add the following environment variables to the `.env` file:
      ```env
      REACT_APP_API_URL=http://localhost:5000
      ```

4. **Start the frontend server**
    ```sh
    npm start
    ```
    The frontend application should now be running on [http://localhost:3000](http://localhost:3000).

## Running the Application
- Ensure both backend and frontend servers are running.
- Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Contributing
We welcome contributions! Please fork the repository and create a pull request with your changes. Ensure your code follows our coding standards and includes appropriate tests.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any queries or issues, please contact [your-email@example.com](mailto:your-email@example.com).
