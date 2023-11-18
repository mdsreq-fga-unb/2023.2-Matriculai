const express = require('express');
const app = express();
const database = require('./models/schemas');
const port = 3001;
const userRoute = require('./views/routes/Users');
app.use(userRoute);

database.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Server running on port 3001');
    });
});