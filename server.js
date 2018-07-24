const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/Web-Info', {
extensions: ['html', 'htm']
}));

app.get("/", (req, res) => {
res.sendFile("index.html", {"root": __dirname + '/Web-Info'});
});


app.use('/Resources', express.static(__dirname + "/Resources"));

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});