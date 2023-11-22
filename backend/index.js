const express = require('express');
const cors = require('cors');
const database = require('./models/schemas');
const userRoute = require('./views/routes/Users');
const electiveRoute = require('./views/routes/Electives')
const learningPathRoute = require('./views/routes/LearningPaths')
const logoutRoutes = require('./views/routes/Users');
const sequelize = require('sequelize');

require("dotenv").config();
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

app.use('/auth', userRoute);
app.use('/elective', electiveRoute);
app.use('/learning_paths', learningPathRoute);
app.use('/api', logoutRoutes);

sequelize
  .sync()
  .then(() => {
    console.log('Conexão bem-sucedida com o banco de dados');
  })
  .catch((error) => {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  });


database.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Server running on port 3001');
    });
});