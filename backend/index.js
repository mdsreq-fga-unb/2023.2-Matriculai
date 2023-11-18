const { validateToken } = require('./controllers/middlewares/Auth');
const express = require('express');
const database = require('./models/schemas');
const userRoute = require('./views/routes/Users');
const app = express();
const port = 3001;


app.use(express.json());
app.use(userRoute);
app.use(validateToken);

require("dotenv").config();

database.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Server running on port 3001');
    });
});