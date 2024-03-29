import express from "express";
import { initDb } from "./db/connect.js";
import { routes } from "./routes/index.js";

const app = express();

app.use("/", routes);

initDb((err, mongodb) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(process.env.PORT || 8080, () => {
      console.log(
        "Connected to DB and listening at port " + (process.env.PORT || 8080)
      );
    });
  }
});

// app.listen(process.env.PORT || 8080, () => {
//     console.log(
//       "Connected to DB and listening at port " + (process.env.PORT || 8080)
//     );
//   });

// TqNhQuQezDwPV84B
