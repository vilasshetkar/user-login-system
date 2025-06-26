# Node.js User Authentication API

This project is a simple Node.js REST API for user registration, login, and profile management, secured with JWT (JSON Web Token) authentication. It uses Express.js for the server, MongoDB for data storage, and JWT for securing restricted endpoints.

## Features

- **User Registration**: Register a new user account.
- **User Login**: Authenticate and receive a JWT access token.
- **Get Profile**: Retrieve the authenticated user's profile (JWT required).
- **Edit Profile**: Update the authenticated user's profile (JWT required).

## Endpoints

### 1. Register User

- **URL:** `/user/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body Example:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "mobile": "1234567890",
    "password": "yourpassword"
  }
  ```
- **Success Response:**
  - **Code:** 201 CREATED
  - **Content:** `{ "message": "User registered successfully." }`
- **Error Response:**
  - **Code:** 400 BAD REQUEST
  - **Content:** `{ "error": "Email already exists." }`

### 2. User Login

- **URL:** `/user/login`
- **Method:** `POST`
- **Description:** Authenticates a user and returns a JWT access token.
- **Request Body Example:**
  ```json
  {
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** `{ "token": "your_jwt_token_here" }`
- **Error Response:**
  - **Code:** 401 UNAUTHORIZED
  - **Content:** `{ "error": "Invalid email or password." }`

### 3. Get Profile

- **URL:** `/user/profile`
- **Method:** `GET`
- **Description:** Retrieves the authenticated user's profile. (JWT required)
- **Headers:** `Authorization: Bearer your_jwt_token_here`
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** `{ "name": "John Doe", "email": "john@example.com", "mobile": "1234567890" }`
- **Error Response:**
  - **Code:** 401 UNAUTHORIZED
  - **Content:** `{ "error": "Invalid or expired token." }`

### 4. Edit Profile

- **URL:** `/user/profile`
- **Method:** `PUT`
- **Description:** Updates the authenticated user's profile. (JWT required)
- **Headers:** `Authorization: Bearer your_jwt_token_here`
- **Request Body Example:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "mobile": "0987654321"
  }
  ```
- **Success Response:**
  - **Code:** 200 OK
  - **Content:** `{ "message": "Profile updated successfully." }`
- **Error Response:**
  - **Code:** 401 UNAUTHORIZED
  - **Content:** `{ "error": "Invalid or expired token." }`

## Project Setup

1. **Initialize Node.js Project**: `npm init -y`
2. **Install Dependencies**:
   - Express.js: `npm install express`
   - Body-parser: `npm install body-parser`
   - JSON Web Token: `npm install jsonwebtoken`
   - MongoDB Driver: `npm install mongodb`

## Tools

- **Code Editor**: VS Code
- **API Testing**: Postman
- **Version Control**: Git

## Official Documentation

- **Express.js**: [Express Installation](https://expressjs.com/en/starter/installing.html)
- **MongoDB**: [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/current/get-started/)
- **Express Middleware**: [Express Middleware](https://expressjs.com/en/resources/middleware.html)
- **JWT Token**: [jsonwebtoken on npm](https://www.npmjs.com/package/jsonwebtoken)
