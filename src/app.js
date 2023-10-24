const express = require("express");
const { getPetNamesAndTypes } = require("../controller");
const knex = require("knex")(
  require("../knexfile")[process.env.NODE_ENV || "development"]
);
const cors = require('cors')
const app = express();
const port = 8888;

app.use(express.json());
app.use(cors());

app.get("/pets", (req, res) => {
  getPetNamesAndTypes()
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again.",
      })
    );
});

app.listen(port, () => {
  console.log(`Express server started on port ${port}`);
});
