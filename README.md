# Fitness and Nutrition Tracking Platform

## Overview
The platform is designed to help users track their fitness and nutrition goals using a modern microservices-based architecture. With features such as user authentication, workout tracking, personalized nutrition plans, and progress analytics, the system aims to deliver a comprehensive health management experience.

## Features
- **User Authentication and Management:** Secure registration, login, and profile management with JWT-based authentication.
- **Workout Tracking:** Access a variety of workout exercises with descriptions and images, create schedules, and customize workout plans.
- **Nutrition Management:** Set fitness goals and receive AI-powered personalized diet recommendations, with the option to track meals and calories.
- **Progress Tracking:** Visualize progress over time using analytics, including weight changes, workout consistency, and nutrition trends.
- **Notifications and Reminders:** Get reminders for workouts, meals, and hydration.
- **Integration with Wearables (Future Feature):** Sync data from popular fitness trackers and smartwatches.
- **Payment Handling:** For premium features and subscriptions.

## Technologies Used
- **Node.js:** JavaScript runtime for building scalable server-side applications.
- **Express.js:** Fast and lightweight web framework for building REST APIs.
- **Docker:** Containerization for consistent deployment across environments.
- **MongoDB:** Flexible NoSQL database for managing user and service data.
- **Microservices Architecture:** Modular design to support scalability and independent service deployment.
- **JWT:** Secure authentication mechanism for managing user sessions.
- **Docker Compose:** Simplifies multi-container Docker applications.

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/EyaAbbassi/fitness-nutrition-tracker.git
   cd fitness-nutrition-tracker

2. **Set Up Environment Variables**
   Create a .env file and configure the necessary environment variables (MongoDB URIs, JWT secrets, etc.).

3. **Run the Services with Docker Compose**
   ```bash
      docker-compose up --build

4. **Testing**
   Run unit tests to ensure all services are functioning correctly.
   ```bash
      npm test