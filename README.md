# 👩‍💻 User Dashboard – React Frontend Project

A **responsive single-page React application** that fetches and displays user data from a public API.  
This project demonstrates clean code structure, dynamic API integration, reusable components, and a modern responsive UI design — all built using **React.js** and **pure CSS (no libraries like Material UI)**.

---

## 🚀 Features

✅ **Fetch Users via API**  
Data is fetched dynamically from `https://jsonplaceholder.typicode.com/users`.

✅ **Search Functionality**  
Includes a real-time search bar to filter users by name.

✅ **Reusable Components**  
A dedicated `UserCard` component displays user details like name, email, phone, and city.

✅ **Responsive Design**  
Grid layout automatically adjusts for mobile, tablet, and desktop screen sizes.

✅ **Attractive UI/UX**  
Soft gradient background, hover animations, and clean typography for a professional look.

---

## 🧠 Tech Stack

| Area | Tools |
|------|-------|
| Frontend Framework | React.js |
| Styling | Pure CSS (custom) |
| API Used | JSONPlaceholder |
| Language | JavaScript (ES6+) |

---

## 🏗️ Project Structure

user-dashboard/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── UserCard.js
│ │ └── UserCard.css
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── index.css
├── package.json
└── README.md


---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/user-dashboard.git
cd user-dashboard


npm install
npm start

Then open your browser at 👉 http://localhost:3000

📱 Responsive Design Demo
Device	View
💻 Desktop	Cards arranged in multiple columns
📱 Mobile	Cards stack vertically with adaptive spacing
🧩 Tablet	Balanced grid layout for medium screens
