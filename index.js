const express = require('express');
const cors = require('cors');
const { addUser, getUsers} = require("./controllers/user");

const app = express();
const port = 3001 || process.env.port;

app.use(cors());
app.get("/user", getUsers);
app.post("/user", addUser);

app.get('/', (req, res) => {
    res.send({ message: `Server is running on ${port}` });
});
app.listen(port, () => {
    console.log(`Application starting on port ${port}`);
});