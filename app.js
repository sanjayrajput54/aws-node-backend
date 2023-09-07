const express = require('express');
const cors = require('cors');
const { addUser, getUsers} = require("./controllers/user");

const app = express();
const PORT = process.env.PORT || 3001

app.use(cors());
app.get("/user", getUsers);
app.post("/user", addUser);

app.get('/', (req, res) => {
    res.send({ message: `Server is running on ${PORT}` });
});
app.listen(PORT, () => {
    console.log(`Application starting on port ${PORT}`);
});