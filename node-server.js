// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('lsc.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.listen(3001, () => {
    console.log('JSON Server is running')
});

server.put('/activities/yog', (req, res) => {
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = JSON.parse(Buffer.concat(body).toString());
        console.log(JSON.stringify(body));
        if (body.costPerClass && body.costPerClass > 200) {
            console.log("error de validación");
            return res.send({
                error: true,
                validation: {
                    costPerClass: 'Debe ser menor a 200',
                    descAct: 'La descripcion es incorrecta'
                }
            });
        } else {
            res.send('ok');
        }
    });
    
    
})

server.use(router)