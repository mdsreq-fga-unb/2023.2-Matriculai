const express = require('express');
const cors = require('cors');
const database = require('./models/schemas');
const userRoute = require('./views/routes/Users');
const electiveRoute = require('./views/routes/Electives')
const learningPathRoute = require('./views/routes/LearningPaths')
const logoutRoutes = require('./views/routes/Users');
const sequelize = require('sequelize');
const deleteLearningPathsRoute = require('./views/routes/LearningPaths');
const extractStudentsRoutes = require('./views/routes/Extract');

require("dotenv").config();
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

app.use('/auth', userRoute);
app.use('/elective', electiveRoute);
app.use('/learningpath', learningPathRoute);
app.use('/api', logoutRoutes);
app.use('/send-file', extractStudentsRoutes);

let test = process.env.DB_USERNAME


database.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Server running on port 3001');
    });
});