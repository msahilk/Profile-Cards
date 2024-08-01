![Home Page](https://i.imgur.com/m3BauoU.png)

Full-Stack web application using:

AWS S3 Buckets
Java Spring-Boot Framework
Vite React / Node.js
PostgreSQL Databases
Docker Containers
JUnit unit tests

S3 Customer Cards allows users to create a user profile where they can choose their:

- Email, Password, and Age
- Profile Image

All customer information is saved in a PostgreSQL database.

Profile images are saved in an AWS S3 bucket, from where they are retreived upon being requested.
Profile images are removed from the bucket upon user deletion or profile image update.


