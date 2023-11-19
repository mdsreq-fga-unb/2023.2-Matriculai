const express = require('express');
const app = express();
const database = require('./models/schemas');
const port = 3001;
const userRoute = require('./views/routes/Users');
const electiveRoute = require('./views/routes/Electives')
const learningPathRoute = require('./views/routes/LearningPaths')
app.use(express.json());
//ajustar rotas
app.use(userRoute);
app.use(electiveRoute);
app.use(learningPathRoute);

database.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Server running on port 3001');
    });
});