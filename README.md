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

🛠️ How to Run the Project

🔃 Step 1: Clone the repository
git clone https://github.com/YOUR_USERNAME/CRUD-Operations.git
cd CRUD-Operations
📦 Step 2: Install dependencies
npm install
▶️ Step 3: Run the server
node server.js
🟢 The server will start at:
http://localhost:3000

---

🧪 Testing the API

You can test the endpoints using:
✅ Postman
✅ Thunder Client (VS Code Extension)

---

⚙️ Tools Used

Node.js
Express.js
Postman / Thunder Client

---

🖼️ Result Screenshots

![Screenshot 2025-06-26 203326](https://github.com/user-attachments/assets/3a12028c-db30-47de-8009-48b873da8132)
![Screenshot 2025-06-26 203544](https://github.com/user-attachments/assets/7025b511-71d8-40b2-9060-33c00e81a1a6)
![Screenshot 2025-06-26 203746](https://github.com/user-attachments/assets/a1f62eeb-3dc0-46a6-8de7-2dbe407700c6)
![Screenshot 2025-06-26 203821](https://github.com/user-attachments/assets/02302800-5de6-48f8-9129-88160a62702e)
![Screenshot 2025-06-26 204109](https://github.com/user-attachments/assets/01edf182-fd1e-4c1c-ab8e-511bf712a13d)

---

📌 Notes

This API uses in-memory storage. All data resets when the server restarts.
Ideal for learning and practicing REST API development.

---

📄 License

This project is licensed under the MIT License.
Feel free to use, modify, and share.

