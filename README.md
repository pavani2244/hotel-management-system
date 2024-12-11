# How to run the application locally.

### Pre-requisites

1. Install Nodejs from the official website: [Nodejs](https://nodejs.org/en/download/prebuilt-installer)
2. Install mongodb community edition: [MongoDB](https://www.mongodb.com/docs/manual/installation/)
3. Any Code editor: VS Code preferred: [VSCode](https://code.visualstudio.com/download)

### Setting Up the Project

1. Extract the Project.
   Unzip the provided `.zip` file into your desired directory.

2. Navigate to the Project Directory.
   Open a terminal/command prompt and navigate to the unzipped folder.

   `cd <path-to-unzipped-folder>`

3. Set Up the Server

   - Navigate to the server directory:
     `cd server`
   - Install dependencies:
     `npm install`
   - Create a `.env.production` file in the server directory and add the following:

     ```env
      ENV=production
      PORT=8000
      SERVER_URL=http://localhost:8000

      # Database
      DATABASE_URL=mongodb://localhost:27017/hotel-management
     ```

   - Start the server:

     `npm start`

     The server should be running at http://localhost:8000.

4. Set Up the Frontend

   - Open a new terminal and navigate to the frontend directory:
     `cd <path-to-unzipped-folder>/frontend`
   - Install dependencies:

     `npm install`

   - Start the frontend development server:

     `npm run start`

     The frontend should open automatically in your default browser. If not, navigate to http://localhost:5173.

### Usage

1. Open the frontend in your browser: http://localhost:5173.
2. Ensure the backend server (http://localhost:8000) is running before interacting with the app.
3. You can perform CRUD operations (e.g., add, update, delete, and view hotel data) through the web interface.

### Troubleshooting

- **MongoDB Connection Issues**:

  Ensure MongoDB is running locally or your Atlas credentials are correct.
  Test your connection using the MongoDB CLI or Compass.

- **Port Conflicts**:

  If port 8000 (backend) or 5173 (frontend) is in use, update the respective ports in the .env file (server) or package.json (frontend).

- **Missing Dependencies**:

  Run npm install again in the relevant directory.

**This should provide a seamless setup experience for anyone running your project locally!**
