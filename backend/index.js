const express = require('express');
const database = require('./models/schemas');
const userRoute = require('./views/routes/Users');
const electiveRoute = require('./views/routes/Electives')
const learningPathRoute = require('./views/routes/LearningPaths')

require("dotenv").config();
const app = express();
const port = 3001;
app.use(express.json());

app.use('/auth', userRoute);
app.use('/elective', electiveRoute);
app.use('/learning_paths', learningPathRoute);


database.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Server running on port 3001');
    });
});