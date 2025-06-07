# ⚔️ Hack Of Clans - Frontend

**Hack Of Clans (HOC)** is a collaborative platform designed to help hackathon enthusiasts search for hackathons, build or join teams, and chat seamlessly with teammates. This frontend repository powers the user interface for the platform, delivering a smooth and interactive experience.

---

## Video Demo 

Sorry for the quality of video, I had to compress the video below 10MB.

https://github.com/user-attachments/assets/f38b732c-e5cd-430e-a994-8a5e851fc6ae

---

https://github.com/user-attachments/assets/bb0638d4-3db0-4966-9bf2-5ad0c4340328

--- 

## Features

- **Hackathon Search:** Easily browse and discover upcoming hackathons.
- **Team Building:** Create new teams or join existing ones for collaborative participation.
- **Real-time Chat:** Communicate instantly with your team members using integrated chat.
- **OAuth Login:** Secure and simple Google OAuth login integration.
- **Smooth Animations:** Engaging UI animations using GSAP, Framer Motion, and Lottie.
- **Responsive Design:** Mobile-friendly and adaptable layouts powered by Tailwind CSS.
- **State Management:** Efficient client-side state with Zustand.
- **Routing:** Seamless navigation with React Router.

---

## Tech Stack

- **React 19** with **Vite** as the build tool
- **React Router DOM** for routing
- **Axios** for API calls
- **Socket.IO Client** for real-time chat
- **Zustand** for state management
- **Tailwind CSS** for styling
- **GSAP, Framer Motion, Lottie React** for animations
- **React Slick & Slick Carousel** for sliders/carousels
- **React Hot Toast** for notifications

---

## 📁 Project Structure

```bash
Frontend/
├── public/                     # Public static assets
├── src/                        # Main source code
│   ├── assets/                # Images, logos, and static assets
│   ├── components/            # Reusable UI components
│   ├── explore/               # Exploration or discovery-related views
│   ├── myteams/               # Team management views and components
│   ├── pages/                 # Core route-level pages (Dashboard, Login, etc.)
│   ├── profile/               # User profile-related components/pages
│   ├── store/                 # Zustand state management store
│   ├── utils/                 # Utility functions/helpers
│   ├── App.jsx                # Root component
│   ├── index.css              # Global stylesheet
│   └── main.jsx               # App entry point
├── .gitignore                 # Files to ignore in git
├── index.html                 # HTML entry file for Vite
├── package.json               # NPM dependencies and scripts
├── package-lock.json          # Lockfile for consistent installs
├── postcss.config.js          # PostCSS config for Tailwind
├── tailwind.config.js         # Tailwind CSS custom configuration
├── eslint.config.js           # ESLint rules
├── vite.config.js             # Vite dev/build config
└── README.md                  # Project documentation
```

## 🎢 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/Omkar-Sankpal/Hack_Of_Clans_Frontend.git
cd Hack_Of_Clans_Frontend
npm install
```

## 🚀 Deployment

The frontend is deployed on **Render**. You can access the deployed site here:  
👉 [Hack Of Clans](https://hack-of-clans-frontend.onrender.com)

---
