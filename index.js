import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3000;
const CONNECTION_DB = process.env.MONGO_DB;
mongoose.connect(CONNECTION_DB)
    .then(() => app.listen(PORT, () => console.log('Server Aktif')))
    .catch((error) => console.log(error));

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Sejuta Cita API",
            description: "By Yohanes Krisna",
            contact: {
                name: "Yohanes Krisna Yana Javista"
            },
            servers: [process.env.SWAGER_URL]
        }
    },
    apis: ['routes/*.js']
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)