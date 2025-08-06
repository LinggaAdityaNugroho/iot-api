const express = require("express");
const app = express();
const userRoutes = require('./src/Routes/Users')
const cors = require("cors")

const port = 8000;

app.use(cors())
app.use(express.json())
app.use('/api', userRoutes)

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
