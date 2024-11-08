import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { userRouter } from "./routes/users.routes";
import { productRouter } from "./routes/products.routes";

dotenv.config();

if (!process.env.PORT) {
  console.log(`No port value specified...`);
}

const PORT = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Mount the user router at a base path, e.g., '/api'
app.use("/api", userRouter); // Mounts all routes in `userRouter` under `/api`
app.use("/api", productRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
