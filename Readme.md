<div align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-3B82F6?style=for-the-badge&logo=react" alt="MERN Stack" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer-Motion-black?style=for-the-badge&logo=framer" alt="Framer Motion" />
  <br/>
  
  <h1>🌐 BlogSphere</h1>
  <p><b>A modern, full-stack blogging platform engineered for speed, security, and premium user experience.</b></p>
</div>

---

## 🌟 Overview

**BlogSphere** is a robust, highly interactive blogging application built from the ground up using the **MERN (MongoDB, Express, React, Node.js)** stack. It empowers writers to publish, format, and share their thoughts with a global audience while offering readers a seamless, distraction-free reading experience.

Featuring a custom-built rich text editor, secure JWT authentication, and sleek micro-animations powered by Framer Motion, BlogSphere is designed to match the standards of top-tier content platforms.

---

## ✨ Core Features

- **🔐 Secure Authentication**: Full JWT-based user authentication and authorization system (Sign up, Sign in, Change Password).
- **📝 Rich Text Editor**: A deeply integrated, block-style editor allowing users to format text, add headers, quotes, lists, and embed images.
- **🖼️ Image Uploads**: Secure image hosting and management via AWS S3 / Cloudinary integration.
- **📱 Responsive UI/UX**: A 100% mobile-first design built with Tailwind CSS, ensuring perfect readability on any device.
- **✨ Cinematic Animations**: Smooth page transitions, staggered list reveals, and interactive hover states using Framer Motion.
- **💬 Engagement System**: Robust backend schemas handling user comments, likes, and nested replies.
- **🔍 Advanced Search**: Real-time blog searching and filtering capabilities.
- **👨‍💻 About Developer Section**: An integrated developer portfolio page showcasing the creator's profile and links.

## 🏗️ Technology Stack

### Frontend (Client)
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React / Flaticon

### Backend (Server)
- **Environment**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Security**: bcrypt (Password Hashing), jsonwebtoken (JWT Auth)

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have Node.js and MongoDB installed on your system.

### 1. Clone the repository
```bash
git clone https://github.com/shubhamkumar-git01/BlogSphere.git
cd BlogSphere
```

### 2. Setup the Backend (Server)
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory and add your credentials:
```env
DB_LOCATION=your_mongodb_uri
SECRET_ACCESS_KEY=your_jwt_secret
AWS_ACCESS_KEY=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
```
Start the server:
```bash
npm start
```

### 3. Setup the Frontend (Client)
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

---
<div align="center">
  <i>Developed by <b>Shubham Kumar</b> • Engineered with passion</i>
</div>