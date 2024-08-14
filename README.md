<h2>Profile Cards</h2>

![Home Page](https://i.imgur.com/m3BauoU.png)

Full-Stack web application using:

AWS S3 Buckets<br />
Java Spring-Boot Framework<br />
Vite React / Node.js<br />
PostgreSQL Databases<br />
Docker Containers<br />
JUnit unit tests<br />

Profile Cards allows users to create a user profile where they can set their:

- Email, Password, and Age
- Profile Image

All information is saved in a PostgreSQL database.

Profile images are saved in an AWS S3 bucket, from where they are retreived upon being requested.
Profile images are removed from the bucket upon user deletion or profile image update.

<h2>How to run:</h2>
(All steps tested in Linux Ubuntu) <br/>
- Clone the repo and open in IntelliJ IDEA <br/>
- Configure application.yml with your required information including AWS S3 bucket name <br/>
- Run a PostgreSQL Docker container with the included docker-compose.yml <br/>
- Run Main.java <br/>
- Navigate to /frontend/react in terminal and run "npm run build" <br/>
- Open localhost:5173 in your browser and use the website! <br/>

![Customer Page](https://i.imgur.com/ZYIysmf.png)
