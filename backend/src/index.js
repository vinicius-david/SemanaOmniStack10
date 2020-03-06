const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://dalota:dalota@cluster0-b6qiv.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());    // para toda a aplicação
app.use(routes);
    
server.listen(3333);



// Métodos HTTP:  get, post, put, delete

// Tipos de parâmetros:

// Query Params (mais usado no get, ficam visíveis na URL): request.query (Filtros, ordenação, paginação, ...)
// Route Params (mais usado no put e delete): request.params (Identificar um recurso na alteração ou remoção)
// Body (mais usado no post e no put): request.body (Dados para criação ou alteração de um registro)

// MongoDB (não-relacional)

