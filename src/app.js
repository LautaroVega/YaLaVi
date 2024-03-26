require('dotenv').config();

/* Dependencias de terceros*/
const express = require('express');
const path = require('path');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');

/* Instancia de express*/
const app = express();

/* Configuración de express */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Middlewares globales */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(expressSession({
    secret: process.env.SECRET }));
app.use(cookieParser());


const mainRoutes = require('./routes/main');
//const productsRoutes = require('./routes/productsRouter');
//const userRoutes = require('./routes/userRouter')

app.use('/', mainRoutes);
//app.use('/user', userRoutes);
//app.use('/products', productsRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado http://localhost:${port}`);
})