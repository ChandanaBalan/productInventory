const jsonServer = require ("json-server")

const productServer = jsonServer.create()

const middleware = jsonServer.defaults()

const router = jsonServer.router('db.json')

productServer.use(middleware)
productServer.use(router)

const PORT = 4000 || process.env.PORT

productServer.listen(PORT, ()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})