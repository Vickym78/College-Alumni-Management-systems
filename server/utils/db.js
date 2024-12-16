import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

// Create the MySQL connection
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    //password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
   // port: process.env.DB_PORT,
});

// Connect to the database
con.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL successfully.");
});

export default con;


