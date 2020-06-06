// import express  from 'express';

// const app = express();

// app.use(express.json());

//Rota: Endereço completo da requisição.
// Recurso : Qual entidade estamos acessando do sistema.


// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// Delete: remover uma informação do back-end


// Request Params parâmetros que vem na próprria rota que indeifica um recurso
// Query Params  parametros que vem no prória rota geralmente opciionais para filtros e paginação
// Request Body: 

// const users = [
//     'Diego',
//     'Client',
//     'Robson',
//     'Arionson',
//     'Online',
//     'Offline'
// ];

// app.get('/users', (request, response) => {
//     const search = String(request.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
//     console.log(search)
//     return  response.json(filteredUsers);
// });

// app.get('/users/:id_users', (request, response) => {
//     const id =  Number(request.params.id_users);
//     const user = users[id]
//     return response.json(users[id]);
// });

// app.post('/users', (request, response) => {

//     const data = request.body;

//     console.log(data);

//     const user = {
//         name:  data.name,
//         email:  data.email
//     }
//     return response.json(user);
// });

// app.get('/', (request, response) => {
//     return  response.json({message: "Hellow World"});
// });

import express  from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import {errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname,'..','upload')));

app.use(errors());

app.listen(3333);
