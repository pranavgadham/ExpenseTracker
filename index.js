import express from "express";
import expenseRouter from "./src/features/expense/expense.routes.js";
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import cros from 'cors';

const app = express();

dotenv.config();

app.use(express.json());
app.use(cros());
app.use("/api/expenses", expenseRouter);
app.use('/swagger.json', express.static('./swagger.json'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
    swaggerUrl: "/swagger.json"
}));

export default app;
