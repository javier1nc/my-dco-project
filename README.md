# Dynamic Creative Optimization (DCO) Pipeline Concept

A decoupled, high-performance HTML5 display ad system designed for scalable, global campaigns. 

This project demonstrates a modern approach to DCO by separating the visual frontend execution from the dynamic data feed. It solves common localization and production bottlenecks by using programmatic text-fitting and dynamic asset injection.

##  Live Demos
* **Frontend Execution (Vercel):** https://my-dco-project.vercel.app
* **Dynamic Data Feed (Railway):** https://my-dco-projectback-production.up.railway.app/api/feed

---

##  Architecture & Tech Stack

Instead of hard-coding assets into the HTML or relying on heavy proprietary ad builders, this system uses a decoupled micro-architecture:

* **Frontend:** Vanilla HTML5, CSS3, JavaScript, GSAP (GreenSock)
* **Backend:** Node.js, Express
* **Deployment:** Vercel (Frontend), Railway (Backend)

### Why this approach?
By keeping the data (backend) completely separate from the design (frontend), a creative team can update copy, translate languages, or swap promotional imagery instantly without ever needing to touch the compiled ad code or trigger a new QA cycle.

---

##  Key Technical Features

### 1. Algorithmic Text Scaling (Binary Search)
When localizing campaigns, translating English copy to languages like German or Spanish often breaks design layouts due to character expansion. 
* **The Solution:** A vanilla JavaScript function utilizing a **Binary Search algorithm** calculates the exact maximum font size that will fit inside a container's bounds without overflowing. 
* **The Benefit:** It prevents ad network rejections for clipped text, and uses a fraction of the browser layout calculations compared to standard loop-based resizing, ensuring silky-smooth animation frame rates.

### 2. High-Performance Animation
* Utilizes **GSAP** timelines for synchronized, hardware-accelerated animations.
* Strict CSS management ensures all elements are loaded and sized *before* the animation sequence begins, eliminating layout shifts.

### 3. Lightweight Footprint
* Built with pure DOM manipulation and zero heavy framework dependencies (no React, no jQuery).
* Designed to easily stay under the standard IAB 150kb file weight limits for programmatic display networks.

---

##  How to Run Locally

If you want to pull this repository and run the DCO pipeline on your local machine:

### 1. Start the Data Feed (Backend)
Open a terminal, navigate to the backend folder, install dependencies, and start the Express server.
```bash
cd backend
npm install
npm start
