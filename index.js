const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
connectDB();
const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/date", require("./routes/dataRoutes"));
app.use("/api/agenda", require("./routes/agendaRoutes"));
app.use("/api/hall", require("./routes/hallRoutes"));
app.use("/api/session", require("./routes/sessionRoutes"));
app.use("/api/title" , require("./routes/titleRoutes"))
app.use("/", require("./routes/frontend"))
// app.get("/api/date", (req, res) => {
//   res.send("hello");
// });
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
