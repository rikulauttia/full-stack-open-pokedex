const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 3001;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
