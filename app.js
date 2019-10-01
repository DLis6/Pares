const express = require('express');
const app = express();
var str = ""
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on("error", function(e) { console.error(e); });

var schema = mongoose.Schema({
    title: String,
    body: String,
    published: { type: Date, default: Date.now }
})

var Article = mongoose.model("Article", schema);

var first = new Article({ title: "Artículo 1", body: "Cuerpo del artículo" });
first.save(function(err) {
    if (err) return console.error(err);
});

/*Article.create({ title: "Artículo 2", body: "Cuerpo del artículo" }, function(err) {
    if (err) return console.error(err);
  });*/

Article.find(function(err, articles) {
    if (err) return console.error(err);
    console.log(articles);
});

/*app.get('/', (req, res) => {
    for (var i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            str += '<p>' + i + ' Soy Par!</p>'
        } else {
            str += '<p>' + i + ' Soy Impar!</p>'
        }
    }
    res.send(str);
});*/
app.listen(3000, () => console.log('Listening on port 3000!'));