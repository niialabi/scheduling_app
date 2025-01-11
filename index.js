import express from "express";
import 'dotenv/config';
import sequelize from "./config/sequelizer.js";
import db from "./models/index.js";
import bodyParser from "body-parser";
import appRouter from "./routes/index.js";

const PORT = process.env.PORT || 8002;


const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/api", appRouter);


db.
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


