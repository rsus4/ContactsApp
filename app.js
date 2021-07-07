const express = require('express');

const app = express();

const port = 8000;

app.use(express.static('ContactsApp'));

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Open http://localhost:${port}/ to view the application`);
});

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/ContactsApp/index.html");
});

app.post("/home", function (req, res) {
  	 res.sendFile(__dirname+"/ContactsApp/home.html");
});
