const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

const port = 8081;

//session for login
const session = require("express-session");

app.use(
  session({
    secret: "secret-key",
  })
);

app.use(cors());
app.use(express.json()); // Add this line to parse incoming JSON data

//Routes:
const userRoute = require("./routes/user.route");
const branchRoute = require("./routes/branch.route");
const departmentRoute = require("./routes/department.route");

app.use("/user", userRoute);
app.use("/branch", branchRoute);
app.use("/department", departmentRoute);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
