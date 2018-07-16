import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import config from '../config'
import path from 'path'


const heander = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
    next()
}
const midle_ware = app => {

    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({
        extended: false
    }))
    app.use(bodyParser.json())
    app.use(heander)
}

const routes_all = app => {

    const {
        blogRouter
    } = require(path.resolve('./modules/blog/routes/blog.route'))
    app.use('/api/v0/blog', blogRouter())
    app.use((req, res, next) => {
       next({
           message : "Not found" ,
           status : 404
       })
    })
    app.use((err, req, res, next) => {

        return res.status(err.status || 500).json({
            message: err.message,
            status: err.status
        })
    })
}


export const express_setup = () => {

    const app = express()

    midle_ware(app)

    routes_all(app)

    return app
}