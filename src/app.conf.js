import express, { json } from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import session from 'express-session'
const PassportLocal = require('passport-local').Strategy
const path = require("path");

// Import routes
import productsRoutes from './routes/views/products'
import passport from 'passport';

const app = express()

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
    if(username === "yop" && password === "12345678")
        return done(null,{ id:1, name:"yop"}) /// aqui hay que traer db
    done(null, false)
    }))


passport.serializeUser(function(user,done){
    done(null, user.id)
})    

passport.deserializeUser(function(id,done){
    done(null,{ id:1, name:"yop"})
})

app.use(morgan('dev'))
app.use(json())

// Routes
//app.use('/products', productsRoutes)
app.use('/products', productsRoutes)

app.get('/', (req,res,next)=>{
    if(req.isAuthenticated())
        return next()
    
    res.redirect("/login")
    // Si no hemos iniciado session redireccionar a /login
},(req, res)=> {
    // Si ya iniciamos mostrar bienvenida
    
    res.render("/products")
    
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
