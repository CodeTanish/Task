# 🗺️ **Travel Planner Dashboard**  
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg?style=flat-square&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.2-blue.svg?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)

> **Plan your journey your way!**  
> Travel Planner Dashboard helps you organize and manage travel plans, view accommodations, flights, and activities, all in one beautifully designed dashboard.

---

## 📌 **Table of Contents**
- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Components Overview](#components-overview)
- [Routing Strategy](#routing-strategy)
- [State Management](#state-management)
- [Responsiveness Strategy](#responsiveness-strategy)
- [Theme Handling](#theme-handling)
- [Deployment Guide (GitHub Pages)](#deployment-guide-github-pages)
- [Contributing](#contributing)
- [License](#license)

---

## 🔹 **Project Overview**
Travel Planner Dashboard is a **React-based web application** that allows users to create, manage, and view personalized travel plans. With detailed information on accommodations, flight details, activities, and tourist spots, users can seamlessly plan their travel experiences.

---

## 🚀 **Live Demo**
Check out the live version: **[Live Demo](https://CodeTanish.github.io/Task)**

---

## 🌟 **Screenshots**
| Onboarding Screen | Main Dashboard |
|-------------------|----------------|
| ![Onboarding](./screenshots/onboarding.png) | ![Dashboard](./screenshots/dashboard.png) |

---

## ✨ **Features**
- 🏙️ **Plan Your Journey** — Choose your destination and travel dates.
- ✈️ **Flight Details** — View and manage flight schedules.
- 🏨 **Accommodation Information** — Display hotel bookings and stay details.
- 🎯 **Activities & Tourist Spots** — Explore and plan local activities.
- 🎨 **Dark/Light Mode** — Toggle between light and dark themes.
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop.

---

## 🔧 **Tech Stack**
- **Frontend:** React, TailwindCSS, React Icons
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Theme Management:** Custom Hook (`useTheme`)
- **Deployment:** GitHub Pages

---

## 🛠️ **Getting Started**
To run the project locally:
1. **Clone the repository**
    ```bash
    git clone https://github.com/CodeTanish/Task.git
    ```
2. **Navigate to the project directory**
    ```bash
    cd Task
    ```
3. **Install dependencies**
    ```bash
    npm install
    ```
4. **Start the development server**
    ```bash
    npm run dev
    ```

---

## 📂 **Folder Structure**
```plaintext
src/
│
├── assets/                 # Images, fonts, etc.
│
├── components/             # Reusable components
│   ├── Accomadation.js
│   ├── Activity.js
│   ├── Button.js
│   ├── Card.js
│   ├── FlightDetail.js
│   ├── HeroCard.js
│   ├── Tourist.js
│   └── UserDetail.js
│   └── AccomadationCard.jsx
|   └── ActivityCard.jsx
|   └── DataCard.jsx
|   └── Footer.jsx
|   └── Heading.jsx
|   └── Icons.jsx
|
├── hooks/                  # Custom hooks
│   └── useTheme.jsx
│
│
├── pages/                  # Page components
│   ├── Onboarding.jsx
│   └── MainDashboard.jsx
│
├── App.jsx 
├── index.css                 # Main application
│
├── main.jsx                # Main render file
│
├── styles/                 # Global and module CSS
│   └── index.css
│
└── utils/                  # Utility functions (if any)