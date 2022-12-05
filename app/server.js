const express = require("express"); //cjs import
const app = express();
const port = 3000;
const indexRouter = require("./routes");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
