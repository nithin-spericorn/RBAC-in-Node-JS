const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();

const info = require('./routes/info');
const db = require('./models');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({force: true})
  .then(()=> console.log('successfully synced with DB'))
  .catch((err)=> console.log("Sync error", err))

app.use('/', info);


// set port, listen for requests
const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});