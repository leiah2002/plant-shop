# 🌿 Flora and Fern

A beautiful online plant shop where customers can browse and purchase plants, flowers, and pots. Built with a clean, responsive frontend and a Node.js/Express backend connected to MongoDB.

---

## 📋 Table of Contents

- [Description]
- [Features]
- [Technologies Used]
- [Project Structure]
- [Installation]
- [Configuration]
- [Usage]
- [Troubleshooting]
- [Contributing]
- [License]

---

## 📖 Description

Flora and Fern is a full-stack e-commerce website for selling plants, flowers, and pots. Customers can browse a curated collection of plants, add items to their cart, and place orders with Cash on Delivery. Shop owners receive email notifications for every new order, and customers receive a confirmation email automatically.

---

## ✨ Features

### User Experience (UX) & Design
- Clean, responsive layout that works on desktop and mobile
- Beautiful plant category sections (Indoor, Outdoor, Succulents, Flowering)
- Smooth Add to Cart toast notifications
- Intuitive navigation with hero section

### Functional & Interactive
- Add to Cart functionality with quantity tracking
- Live cart total calculation in Kenyan Shillings (Ksh)
- Remove items from cart
- Checkout flow with customer name and email collection
- Cash on Delivery payment method

### Technical, Performance & Security
- RESTful backend API built with Express.js
- MongoDB database for plant and order data
- Email notifications via Nodemailer (Gmail)
- Environment variables for secure credential storage
- CORS enabled for frontend-backend communication
- Data seeding script for easy database setup

---

## 🛠 Technologies Used

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (via Mongoose) |
| Email | Nodemailer (Gmail) |
| Fonts | Google Fonts (Poppins, Playfair Display) |

---

## 📁 Project Structure

```
flora-and-fern/
│
├── frontend/
│   ├── index.html        # Main website page
│   ├── style.css         # Styles and layout
│   ├── script.js         # Cart logic and backend connection
│   ├── logo.png          # Shop logo
│   └── images/           # Plant images
│
└── plant-shop-backend/
    ├── models/
    │   ├── plants.js     # Plant database schema
    │   └── order.js      # Order database schema
    ├── routes/
    │   ├── plants.js     # Plant API routes
    │   └── orders.js     # Order API routes + email
    ├── server.js         # Main Express server
    ├── seed.js           # Database seeding script
    ├── .env              # Environment variables (not committed)
    ├── package.json
    └── package-lock.json
```

---

## ⚙️ Installation

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher
- A free [MongoDB Atlas](https://www.mongodb.com/atlas) account
- A Gmail account with 2-Step Verification enabled

### Steps

**1. Clone or download the project**
```bash
git clone https://github.com/yourusername/flora-and-fern.git
cd flora-and-fern/plant-shop-backend
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the `plant-shop-backend` folder:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/plant-shop
PORT=3000
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your16characterapppassword
```

**4. Seed the database with plants**
```bash
node seed.js
```

**5. Start the server**
```bash
node server.js
```

**6. Open the website**

Double-click `index.html` in the frontend folder to open it in your browser.

---

## 🔧 Configuration

### MongoDB
- Sign up at [mongodb.com/atlas](https://www.mongodb.com/atlas)
- Create a free M0 cluster
- Get your connection string and paste it as `MONGO_URI` in `.env`
- Replace `<password>` with your database user password

### Gmail Email Notifications
- Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- Create an App Password named "Plant Shop"
- Paste the 16-character password as `EMAIL_PASS` in `.env`
- Set `EMAIL_USER` to your Gmail address

### Changing the Shop Email
When handing the website to the shop owner, update these two lines in `.env`:
```
EMAIL_USER=shopowner@gmail.com
EMAIL_PASS=theirnewapppassword
```

---

## 🚀 Usage

### Running the Backend
```bash
cd plant-shop-backend
node server.js
```
You should see:
```
🚀 Server running at http://localhost:3000
✅ Connected to MongoDB!
```

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/plants | Get all plants |
| POST | /api/plants | Add a new plant |
| DELETE | /api/plants/:id | Delete a plant |
| POST | /api/orders | Place an order (sends emails) |

### Adding a New Plant
Use Thunder Client or Postman:
```json
POST http://localhost:3000/api/plants
{
  "name": "Monstera Plant",
  "price": 400,
  "category": "tropical",
  "stock": 10,
  "careLevel": "easy",
  "description": "Classic tropical houseplant"
}
```

### Placing an Order
Orders are placed automatically when a customer clicks Checkout on the website. Both the shop owner and customer receive email confirmations.

---

## 🔍 Troubleshooting

### "Cannot GET /api/plants"
An old server process may still be running. Kill it and restart:
```bash
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
node server.js
```

### "Connected to MongoDB" but plants not showing
Run the seed script to populate the database:
```bash
node seed.js
```

### Emails not sending
- Make sure `EMAIL_USER` and `EMAIL_PASS` are correctly set in `.env`
- Confirm your Gmail App Password is 16 characters with no spaces
- Check that 2-Step Verification is enabled on your Google account

### PowerShell "running scripts is disabled" error
```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### npm not recognized
Download and install Node.js from [nodejs.org](https://nodejs.org) and restart your terminal.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2026 Flora and Fern

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software.
```

---

*Built with 🌿 by Flora and Fern*
# plant-shop
