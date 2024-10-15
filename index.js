import express from "express";
import expenseRouter from "./src/features/expense/expense.routes.js";
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(express.json());
app.use("/api/expenses", expenseRouter);
app.use('/swagger.json', express.static('./swagger.json'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
    swaggerUrl: "/swagger.json"
}));

export default app;
