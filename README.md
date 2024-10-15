# Expense Tracker API

This is a simple Expense Tracker API built using Express.js and MongoDB, allowing users to manage their expenses with features like adding, updating, deleting, and grouping expenses by tags or recurring status.

## Features

- Add new expenses
- Edit or delete existing expenses
- Filter expenses by various criteria
- Group expenses by tags or recurring status
- Full API documentation available via Swagger UI

## Documentation

The full API documentation is available using Swagger UI.

- [API Documentation](http://localhost:3000/api-docs)

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)

### 1. Clone the Repository

Run the following command to clone the repository:

```bash
git clone https://github.com/your-username/expense-tracker-api.git
cd expense-tracker-api
```

### 2. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

### 3. Set up Environment Variables

Create a .env file at the root of your project and set the following environment variables:

```bash
# .env file
PORT=
MONGO_URI=
```

### 4. Start the Application

Run the application in development mode:

```bash
npm run dev
```

## Technologies Used

- Express.js: Web framework for Node.js
- MongoDB: NoSQL database for storing expense data
- Swagger-UI: For API documentation

