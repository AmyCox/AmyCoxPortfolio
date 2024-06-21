const express = require("express");

const path = require("path");

const app = express();

//set the port
const port = process.env.PORT || 3000;

//serve the static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

const indexRoutes = require("./routes/index");
const aboutRoutes = require("./routes/about");

app.use(indexRoutes);
app.use(aboutRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

//start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
