// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server is running in port ${PORT}`));