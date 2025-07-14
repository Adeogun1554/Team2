# Team2 – HALCEware Review App

## Project Overview
HALCEware is a web-based review platform for users to post honest reviews about businesses, services, or products. It aims to be a transparent and user-friendly space for feedback, similar to Yelp or Google Reviews.

## Team Members
-Chelsea Guthridge 
-Heavena LeShore
-Emmanuel Adeogun

## Folders
- '/client' → React frontend
- '/server' → Flask backend API
- '/docs' → Planning, diagrams, database schema

## Features (MVP)
-Skill-based listings (offer or request)
-GSU-only login
-Messaging between users
-Skill Points + Reviews
-Job portal (Phase 2)

## Tech Stack
-Frontend: React.js
-Backend: Flask (Python)
-Database: Firebase or PostgreSQL

# Getting Started
Follow these steps to set up and run the HALCEware application on your local machine.

## 1. Prerequisites
Make sure you have the following installed:
Git: To clone the project.
Node.js & npm: For the React frontend.
Python 3.x & pip: For the Flask backend.
Database: Either PostgreSQL installed and running, or a Firebase project set up.

## 2. Installation
Clone the Repository:
git clone https://github.com/Adeogun1554/Team2.git
cd Team2

Setup Frontend (Client):
Navigate into the client folder and install dependencies:
cd client
npm install

Setup Backend (Server):
Navigate into the server folder, create a Python virtual environment, and install dependencies:
cd ../server # Go back to root, then into server
python -m venv venv
source venv/bin/activate # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt


## 4. Running the Application
Open two separate terminal windows for the frontend and backend.
Start Backend Server:
In the first terminal, from the /server directory (with your virtual environment active):
flask run
This usually runs on http://localhost:5000.
Start Frontend Server:
In the second terminal, from the /client directory:
npm start
This usually opens the app in your browser at http://localhost:3000.

## 5. Access the App
Once both servers are running, open your web browser and go to:
http://localhost:3000
You should now see HALCEware running!
