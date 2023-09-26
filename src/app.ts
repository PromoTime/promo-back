import "reflect-metadata";
import express, { json } from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import cors from "cors";
import { errorHandler } from "./errors";
import loginRoute from "./routes/login.routes";
import usersRoutes from "./routes/users.routes";
import promosRoutes from "./routes/promo.routes";

export const prisma = new PrismaClient();

const app = express();
app.use(json());
app.use(cors());
app.use("/login", loginRoute)
app.use("/user", usersRoutes)
app.use("/promo", promosRoutes)


app.use(errorHandler);

export default app;
