const mongoose = require("mongoose");
const app = require("./app");
const DB_HOST =
  "mongodb+srv://taras:rk9c3d3XrHJa6EwC@contacts.fe1scp4.mongodb.net/";

require("dotenv").config();

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
