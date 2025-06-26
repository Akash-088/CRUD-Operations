# 📚 CRUD Operations API using Node.js and Express

A simple and lightweight RESTful API that allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of books. This project is built using Node.js and Express.js, with in-memory storage (no database).

---

## 🧠 Features

- 📖 View all books
- ➕ Add a new book
- ✏️ Update existing book by ID
- ❌ Delete a book by ID

---

## 📂 Folder Structure

CRUD-Operations/
│
├── server.js # Main Express server file
├── README.md # You're reading this file
├── package.json # Node.js dependencies & metadata

---


---

## 🚀 API Endpoints

| Method | Endpoint        | Description              |
|--------|------------------|--------------------------|
| GET    | `/books`         | Get list of all books    |
| POST   | `/books`         | Add a new book           |
| PUT    | `/books/:id`     | Update a book by ID      |
| DELETE | `/books/:id`     | Delete a book by ID      |

---

### 📝 Sample POST Body

{
  "title": "Clean Code",
  "author": "Robert C. Martin"
}

---
