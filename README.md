# 🏨 Hotel Booking System API

This is a Node.js backend RESTful API for a hotel room booking system. It allows admins to manage hotels, rooms, and bookings, and allows users to browse and book rooms.

---

## 🚀 Features

- 🔐 **Authentication & Authorization**
  - Admin & User login/signup
  - JWT-based token system
  - Role-based access (Admin only routes)

- 🏨 **Hotel Management (Admin Only)**
  - Create hotels with Cloudinary image upload
  - Get all hotels

- 🚪 **Room Management (Admin Only)**
  - Create and manage rooms
  - Assign rooms to hotels

- 📅 **Booking System (User)**
  - Book available rooms
  - See user bookings

---

## 🧠 Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** for authentication
- **Cloudinary** for image uploads
- **Multer** for handling multipart/form-data
- **dotenv** for environment config
- **bcryptjs** for password hashing
- **Joi** for input validation

---

## 📁 Folder Structure

```
booking-system/
│
├── DB/
│   └── config/db.config.js
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   ├── utils/
│   └── validation/
├── .env
├── server.js
└── README.md
```

---

## ⚙️ How to Run Locally

1. **Clone repo**  
```bash
git clone https://github.com/YOUR_USERNAME/hotel-booking.git
cd hotel-booking
```

2. **Install dependencies**  
```bash
npm install
```

3. **Add `.env` file**  
```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. **Run server**  
```bash
npm run dev
```

---

## 📮 API Endpoints

### 🔐 Auth Routes

| Method | Route                     | Access |
|--------|---------------------------|--------|
| POST   | /api/auth/register        | Public |
| POST   | /api/auth/login           | Public |
| POST   | /api/auth/signup-admin    | Public |
| POST   | /api/auth/login-admin     | Public |

---

### 🏨 Hotel Routes

| Method | Route         | Access      |
|--------|---------------|-------------|
| POST   | /api/hotels   | Admin only  |
| GET    | /api/hotels   | Public      |

---

### 🚪 Room Routes

| Method | Route         | Access      |
|--------|---------------|-------------|
| POST   | /api/rooms    | Admin only  |
| GET    | /api/rooms    | Public      |

---

### 📅 Booking Routes

| Method | Route           | Access      |
|--------|-----------------|-------------|
| POST   | /api/bookings   | User only   |
| GET    | /api/bookings   | User only   |

---

## 🙋‍♀️ Author

**Menna (pinky shark)**  
GitHub: [@Binkyshark](https://github.com/Binkyshark)

---

## 📌 Notes

- All admin routes are protected via JWT and `isAdmin` flag.
- Cloudinary is used to upload hotel images via `Multer`.

---

## 🏁 To Do

- [ ] Add update/delete for hotels and rooms
- [ ] Add pagination and search filters
- [ ] Add booking cancellation

---

## 🖼️ Example Image Upload (Hotel)
Make sure to use Postman and send a `multipart/form-data` with a field named `photo`.
