# **SuppTicket**

## _Description_

Support ticket management system, _SuppTicket_ is an a proyect that create, assign, update, and delete tickets, this tickets can be created only by an admin user and assign to any employed.

The tickets contain information about a task to complete and information about the creator and the employed that was assigned.

<hr/>

## _About_

This app was building using express.js and mongodb as database, and run in a docker's container, the container was created using docker-compose in the _docker-compose.yml_ file.

Also the project have an authentication with [JWT](https://jwt.io/) to admin the client active session.

## _How to Run_

Clone the repository and reinstall the node_modules using.

### **`npm install`**

Then Run one of the following scripts in terminal,

## _Available Scripts_

### **`npm run start`**

Runs the server in the production mode.

Launch the server using `Node` in port `4000`.

### **`npm run dev`**

Runs the server in the development mode.

Launch the server using `Nodemon` in port `4000`.

[Nodemon](https://www.npmjs.com/package/nodemon) package is required to use this script.

<hr/>


## **Third Party Package in this project**

-   `cors`
-   `dotenv`
-   `uuid`
-   `joi`
-   `bcryptJs`
-   `cross-env`

<hr/>
