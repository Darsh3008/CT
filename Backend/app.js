    const express = require('express');
    const cookieParser = require('cookie-parser');
    const cors = require('cors');
    const connectDB = require('./src/config/database.js');
    const authRouter = require('./src/routes/auth.routes.js');

    const app = express();
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());

    connectDB();

    app.use('/api/auth', authRouter);

    module.exports = app;