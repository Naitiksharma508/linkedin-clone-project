# Simple LinkedIn Clone Project (AppDost Assignment)

This is a simple social media website built as part of the AppDost Full Stack Developer Internship assignment. It allows users to sign up, log in, create posts, and view a public feed of all posts

##  Live Project Links

* **Frontend (Netlify):** https://curious-smaker-b4d323.netlify.app
* **Backend (Render):** https://linkedin-clone-backend-sqvx.onrender.com

##  Tech Stack Used

As per Option 1 in the assignment
* **Frontend:** React.js (with Vite) 
* **Backend:** Node.js + Express.js 
* **Database:** MongoDB (using MongoDB Atlas)

## Features Implemented

* **User Authentication:** Users can sign up with a name, email, and password.They can then log in to access the site
* **Create Posts:** Logged-in users can write and submit new text posts
* **Public Feed:** All posts from all users are displayed on a central feed, with the latest posts appearing first
* **Post Information:** Each post clearly shows the author's name, the post content, and the time it was created
* **Authentication Flow:** Logged-in users see the main app, while logged-out users are redirected to the login page.

##  How to Run This Project Locally

1.  **Clone the repository:**
    `git clone https://github.com/Naitiksharma508/linkedin-clone-project.git`

2.  **Run the Backend:**
    ```bash
    cd linkedin-clone-project/backend
    npm install
    # Create a .env file with your local MONGO_URI and JWT_SECRET
    npm start
    ```

3.  **Run the Frontend:**
    ```bash
    cd linkedin-clone-project/frontend/client
    npm install
    npm run dev
    ```