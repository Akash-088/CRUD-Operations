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

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin"
}

---

🛠️ How to Run the Project

🔃 Step 1: Clone the repository
git clone https://github.com/YOUR_USERNAME/CRUD-Operations.git
cd CRUD-Operations
📦 Step 2: Install dependencies
npm install
▶️ Step 3: Run the server
node server.js
The server will start at:
http://localhost:3000

---

🧪 Testing the API

You can test the endpoints using:
✅ Postman
✅ Thunder Client (VS Code Extension)

---

🛠️ Tools Used

Node.js
Express.js
Postman / Thunder Client

---

Result:

![Screenshot 2025-06-26 203544](https://github.com/user-attachments/assets/d83a8c22-cebb-4fe8-b06d-55534128e802)
![Screenshot 2025-06-26 203326](https://github.com/user-attachments/assets/b65dabcc-1f45-4fd2-89b4-a0a85f1f6151)
![Screenshot 2025-06-26 203746](https://github.com/user-attachments/assets/94ddeaac-ab58-4490-b726-fb0b722d0a60)
![Screenshot 2025-06-26 203821](https://github.com/user-attachments/assets/95cb12b1-99a3-4e1d-b458-716ace1c9b85)
![Screenshot 2025-06-26 204109](https://github.com/user-attachments/assets/39ba464b-23c0-461e-a928-fa54ae6b1a66)

---
📌 Notes

This API uses in-memory storage; all data will reset when the server restarts.
Great for learning and practicing REST API fundamentals.

---

📄 License

This project is licensed under the MIT License.
Feel free to use, share, and modify it.
