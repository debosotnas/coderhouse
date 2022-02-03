const express = require('express');
const colors = require('colors');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.post('/procesar', (req, res) => {
    // ....
    
});

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Mi primer web server</title>
                <script src="main.js"></script>
            </head>
            <body>
                <h1>Hola mundo</h1>
                <form method="post" action="/procesar">
                    <button></button>
                </form>
            </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log(colors.red(`Aplicación lista, escuchando en el puerto: ${port}`));
});