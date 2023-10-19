const express = require('express');
const bodyParser = require('body-parser');
const actorsRoutes = require('./routes/ActorsRoutes');
const authorizationMiddleware = require('./middlewares/authorization');

const app = express();
const port = 3000;

app.use(bodyParser.json());
// app.use('/actors', actorsRoutes);  // Esto conecta las rutas de actores con tu aplicación.
app.use('/actors', authorizationMiddleware, actorsRoutes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
