const express = require('express');
const app = express();
var str = ""

app.get('/', (req, res) => {

    for (var i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            str += '<p>' + i + ' Soy par!</p>'
        } else {
            str += '<p>' + i + ' Soy impar!</p>'
        }

    }

    res.send(str);
});

app.listen(3000, () => console.log('Listening on port 3000!'));