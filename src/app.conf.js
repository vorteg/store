import express, { json } from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import productsApi from './routes/api/products'
import routerProducts from './routes/views/products'
const PassportLocal = require('passport-local').Strategy
const path = require("path");
const {makeExecutableSchema}= require('graphql-tools')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const resolvers = require('./lib/resolvers')



//  schema graphQL define
const typeDefs = readFileSync(
    join(__dirname, 'lib', 'schema.graphql'),
    'utf-8'
)

const schema = makeExecutableSchema({typeDefs, resolvers})

// Import routes

import passport from 'passport';
import { join } from 'path'


const app = express()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}) )

//Template Engine
app.set("views", path.join(__dirname,  "views"));
app.set("view engine", "pug");



// Middlewares
app.use(express.urlencoded({extended: true}))
app.use(cookieParser('secret word'))
app.use(session({
    secret: 'secret word',
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

//Serializacion
passport.use(new PassportLocal(function(username,password,done){
    if(username === "admin" && password === "admin")
        return done(null,{ id:1, name:"yop"}) /// aqui hay que traer db
    done(null, false)
    }))


passport.serializeUser(function(user,done){
    done(null, user.id)
})    

passport.deserializeUser(function(id,done){
    done(null,{ id:1, name:"admin"})
})

app.use(morgan('dev'))
app.use(json())

// Routes
app.use('/products', routerProducts)
productsApi(app)

app.get('/', (req,res,next)=>{
    if(req.isAuthenticated())
        return next()
    
    res.redirect("/login")
    // Si no hemos iniciado session redireccionar a /login
},(req, res)=> {
    // Si ya iniciamos mostrar bienvenida
    
    res.redirect('/products')
    
})

app.get("/login", (req, res)=>{
    //Mostrar Formulario del login
    res.render("login")
})

app.post("/login", passport.authenticate('local',{
    successRedirect: "/products",
    failureRedirect: "/login"
}))

export default app
